import { Vec3 } from "@/src/utils/vector";
import { Phase } from "./Walkthrough";
import { localizedCommentary, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import { cameraForBlocks } from "../Camera";

export function walkthrough09_Output(args: IWalkthroughArgs) {
    let { walkthrough: wt, state } = args;

    if (wt.phase !== Phase.Input_Detail_Output) {
        return;
    }

    const layout = state.layout;
    const camera = cameraForBlocks(layout.cubes.slice(layout.ln_f.lnAgg1.idx), state.render.size, new Vec3(281.6, -7.9));
    setInitialCamera(state, camera.center, camera.angle);

    localizedCommentary(wt, 'output.explanation', {}, null, 0);
}
