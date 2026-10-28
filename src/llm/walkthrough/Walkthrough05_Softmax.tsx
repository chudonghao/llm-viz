import { Vec3 } from "@/src/utils/vector";
import { Phase } from "./Walkthrough";
import { localizedCommentary, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";

export function walkthrough05_Softmax(args: IWalkthroughArgs) {
    let { walkthrough: wt, state } = args;

    if (wt.phase !== Phase.Input_Detail_Softmax) {
        return;
    }

    setInitialCamera(state, new Vec3(-24.350, 0.000, -1702.195), new Vec3(283.100, 0.600, 1.556));

    localizedCommentary(wt, 'softmax.explanation', {}, null, 0);
}
