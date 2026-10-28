import React from 'react';
import { Phase } from "./Walkthrough";
import { localizedCommentary, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import s from './Walkthrough.module.scss';
import { Vec3 } from '@/src/utils/vector';
import { cameraForBlocks } from "../Camera";

let minGptLink = 'https://github.com/karpathy/minGPT';
let pytorchLink = 'https://pytorch.org/';
let andrejLink = 'https://karpathy.ai/';
let zeroToHeroLink = 'https://karpathy.ai/zero-to-hero.html';

export function walkthrough01_Prelim(args: IWalkthroughArgs) {
    let { state, walkthrough: wt } = args;

    if (wt.phase !== Phase.Intro_Prelim) {
        return;
    }

    const camera = cameraForBlocks(state.layout.cubes, state.render.size, new Vec3(296, 16));
    setInitialCamera(state, camera.center, camera.angle);

    localizedCommentary(wt, 'prelim.body', {
        minGpt: embedLink('minGPT', minGptLink),
        pytorch: embedLink('PyTorch', pytorchLink),
        andrej: embedLink('Andrej Karpathy', andrejLink),
        zeroToHero: embedLink('Neural Networks: Zero to Hero', zeroToHeroLink),
    }, null, 0);

}

export function embedLink(a: React.ReactNode, href: string) {
    return embedInline(<a className={s.externalLink} href={href} target="_blank" rel="noopener noreferrer">{a}</a>);
}

export function embedInline(a: React.ReactNode) {
    return { insertInline: a };
}


// Another similar model is BERT (bidirectional encoder representations from transformers), a "context-aware text encoder" commonly
// used for tasks like document classification and search.  Newer models like Facebook's LLaMA (large language model architecture), continue to use
// a similar transformer architecture, albeit with some minor differences.
