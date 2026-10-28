import React from "react";
import { Dim, Vec3 } from "@/src/utils/vector";
import { Phase } from "./Walkthrough";
import { embed, localizedCommentary, DimStyle, dimStyleColor, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import { findSubBlocks, splitGrid } from "../Annotations";
import { lerp } from "@/src/utils/math";
import { IBlkDef } from "../GptModelLayout";
import { cameraForBlocks } from "../Camera";
import { processUpTo, startProcessBefore } from "./Walkthrough00_Intro";
import { drawDataFlow } from "../components/DataFlow";
import { drawDependences } from "../Interaction";
import { makeArrayRange } from "@/src/utils/data";
import { translate, type MessageKey } from '../i18n/messages';

export function walkthrough07_Mlp(args: IWalkthroughArgs) {
    let { walkthrough: wt, state, layout, tools: { afterTime, c_blockRef, c_dimRef, breakAfter, cleanup } } = args;

    if (wt.phase !== Phase.Input_Detail_Mlp) {
        return;
    }

    const t = (key: MessageKey) => translate(wt.locale, key);

    let block = layout.blocks[0];

    const camera = cameraForBlocks([block.attnResidual, ...block.mlpLabel.cubes], state.render.size, new Vec3(289.1, -8.9), 1.3);
    setInitialCamera(state, camera.center, camera.angle);
    wt.dimHighlightBlocks = [block.ln2.lnResid, block.mlpAct, block.mlpFc, block.mlpFcBias, block.mlpFcWeight, block.mlpProjBias, block.mlpProjWeight, block.mlpResult, block.mlpResidual];

    localizedCommentary(wt, 'mlp.introduction', {
        layerNorm: c_blockRef(t('mlp.layerNormTerm'), block.ln2.lnResid),
        channels: c_dimRef('C = 48', DimStyle.C),
        expansion: c_blockRef(t('mlp.linearTransformationTerm'), block.mlpFcWeight),
        expansionBias: c_blockRef(t('mlp.biasTerm'), block.mlpFcBias),
        expandedChannels: c_dimRef('4 * C', DimStyle.C4),
        projection: c_blockRef(t('mlp.linearTransformationTerm'), block.mlpProjWeight),
        projectionBias: c_blockRef(t('mlp.biasTerm'), block.mlpProjBias),
        outputChannels: c_dimRef('C', DimStyle.C),
    });
    breakAfter();

    let t0_fadeOut = afterTime(null, 1.0);

    breakAfter();

    localizedCommentary(wt, 'mlp.expansion', {
        expandedChannels: c_dimRef('4 * C', DimStyle.C4),
    });
    breakAfter();

    let t1_process = afterTime(null, 3.0);

    breakAfter();

    localizedCommentary(wt, 'mlp.activation', {
        reluFormula: <code>max(0, x)</code>,
        activationGraph: embed(ReluGraph),
    });
    breakAfter();

    let t2_process = afterTime(null, 3.0);

    breakAfter();

    localizedCommentary(wt, 'mlp.projection', {
        channels: c_dimRef('C', DimStyle.C),
    });
    breakAfter();

    let t3_process = afterTime(null, 3.0);

    breakAfter();

    localizedCommentary(wt, 'mlp.residual');
    breakAfter();

    let t4_process = afterTime(null, 3.0);

    breakAfter();
    localizedCommentary(wt, 'mlp.sequence');

    breakAfter();

    let t5_cleanup = afterTime(null, 1.0, 0.5);
    cleanup(t5_cleanup, [t0_fadeOut]);
    let t6_processAll = afterTime(null, 6.0);

    breakAfter();

    localizedCommentary(wt, 'mlp.summary');

    let targetIdx = 3;
    let inputBlk = block.ln2.lnResid;
    let mlp1Blk = block.mlpFc;
    let mlp2Blk = block.mlpAct;
    let mlpRes = block.mlpResult;
    let mlpResid = block.mlpResidual;

    function dimExceptVector(blk: IBlkDef, disable: boolean) {
        if (t0_fadeOut.t === 0 || t6_processAll.t > 0) {
            return;
        }

        if (disable) {
            blk.access!.disable = true;
        }

        let col = splitGrid(layout, blk, Dim.X, targetIdx + 0.5, lerp(0.0, 1.0, t0_fadeOut.t))!;

        for (let sub of blk.subs!) {
            sub.opacity = lerp(1.0, 0.2, t0_fadeOut.t);
        }

        col.opacity = 1.0;

        return col!;
    }

    dimExceptVector(inputBlk, false);
    let mlp1Col = dimExceptVector(mlp1Blk, true);
    let mlp2Col = dimExceptVector(mlp2Blk, true);
    let mlpResCol = dimExceptVector(mlpRes, true);
    const mlpResidCol = dimExceptVector(mlpResid, true);

    function processVector(blk: IBlkDef, col: IBlkDef | undefined, t: number) {
        if (t === 0) {
            return;
        }
        if (t >= 1) {
            if (col) col.access!.disable = false;
            return;
        }

        const channel = Math.min(blk.cy - 1, Math.floor(lerp(0, blk.cy, t)));
        const destIdx = new Vec3(targetIdx, channel);

        if (col) {
            splitGrid(layout, col, Dim.Y, channel, 0.0);
            for (let a of findSubBlocks(col, Dim.Y, 0, channel)) {
                a.access!.disable = false;
            }
        }

        // Keep the calculation above its output column as the scan moves downwards.
        drawDataFlow(state, blk, destIdx, new Vec3(blk.cx / 2, -layout.margin / layout.cell));
        drawDependences(state, blk, destIdx);
    }

    processVector(mlp1Blk, mlp1Col, t1_process.t);
    processVector(mlp2Blk, mlp2Col, t2_process.t);
    processVector(mlpRes, mlpResCol, t3_process.t);
    processVector(mlpResid, mlpResidCol, t4_process.t);

    if (t5_cleanup.t > 0.4) {
        mlp1Blk.access!.disable = true;
        mlp2Blk.access!.disable = true;
        mlpRes.access!.disable = true;
        mlpResid.access!.disable = true;
    }

    if (t6_processAll.t > 0) {
        let prevInfo = startProcessBefore(state, inputBlk);
        processUpTo(state, t6_processAll, mlpResid, prevInfo);
    }
}


const ReluGraph: React.FC = () => {

    let fnRelu = (x: number) => Math.max(0, x);
    let fnGelu = (x: number) => x * 0.5 * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));

    function createMapping(range0: number, range1: number, domain0: number, domain1: number) {
        let m = (range1 - range0) / (domain1 - domain0);
        let b = range0 - m * domain0;
        return (x: number) => m * x + b;
    }

    let w = 200;
    let h = 160;

    let halfW = 3.2;
    let halfH = halfW * h / w;
    let hOffset = 1.1;

    let xScale = createMapping(0, w, -halfW, halfW);
    let yScale = createMapping(h, 0, -halfH + hOffset, halfH + hOffset);

    let xPts = makeArrayRange(100, -halfW, halfW);

    function makePath(fn: (x: number) => number) {
        let path = "";
        for (let x of xPts) {
            let y = fn(x);
            path += (path ? 'L' : 'M') + `${xScale(x)},${yScale(y)} `;
        }
        return path;
    }

    let vertTickVals = [-1, 1, 2, 3];

    let vertTicks = vertTickVals.map(a => {
        return { x: xScale(0), y: yScale(a), label: a };
    });

    let horizTickVals = [-3, -2, -1, 1, 2, 3];
    let horizTicks = horizTickVals.map(a => {
        return { x: xScale(a), y: yScale(0), label: a };
    });

    let tickColor = "gray";

    return <div className="flex justify-center my-2">
        <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="bg-slate-200 rounded">
            <line x1={xScale(-halfW)} x2={xScale(halfW)} y1={yScale(0)} y2={yScale(0)} stroke={"gray"} strokeWidth={1} />
            <line x1={xScale(0)} x2={xScale(0)} y1={yScale(-halfH + hOffset)} y2={yScale(halfH + hOffset)} stroke={"gray"} strokeWidth={1} />
            {/* <path d={makePath(fnRelu)} stroke={"blue"} fill="none" strokeWidth={1} /> */}
            <path d={makePath(fnGelu)} stroke={dimStyleColor(DimStyle.Intermediates).toHexColor()} fill="none" strokeWidth={3} />
            {vertTicks.map((a, i) => <g key={i} transform={`translate(${a.x}, ${a.y})`}>
                <line x1={-5} x2={5} y1={0} y2={0} stroke={tickColor} strokeWidth={1} />
                <text x={10} y={5} fontSize={10} fill={tickColor}>{a.label}</text>
            </g>)}
            {horizTicks.map((a, i) => <g key={i} transform={`translate(${a.x}, ${a.y})`}>
                <line x1={0} x2={0} y1={-5} y2={5} stroke={tickColor} strokeWidth={1} />
                <text x={0} y={18} fontSize={10} textAnchor="middle" fill={tickColor}>{a.label}</text>
            </g>)}
        </svg>
    </div>;
};
