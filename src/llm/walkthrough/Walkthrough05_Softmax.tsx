import { Vec3 } from "@/src/utils/vector";
import { Phase } from "./Walkthrough";
import { localizedCommentary, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import { cameraForOutput } from "../Camera";

export function walkthrough05_Softmax(args: IWalkthroughArgs) {
    let { walkthrough: wt, state } = args;

    if (wt.phase !== Phase.Input_Detail_Softmax) {
        return;
    }

    const { logits, logitsAgg1, logitsAgg2, logitsSoftmax } = state.layout;
    const camera = cameraForOutput(state.layout, state.render.size, new Vec3(283.1, 0.6),
        [logits, logitsAgg1, logitsAgg2, logitsSoftmax]);
    setInitialCamera(state, camera.center, camera.angle);

    localizedCommentary(wt, 'softmax.explanation', {}, null, 0);
}
