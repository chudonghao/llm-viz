import { Vec3 } from "@/src/utils/vector";
import { Phase } from "./Walkthrough";
import { localizedCommentary, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import { cameraForBlocks } from "../Camera";

export function walkthrough08_Transformer(args: IWalkthroughArgs) {
    let { walkthrough: wt, state } = args;

    if (wt.phase !== Phase.Input_Detail_Transformer) {
        return;
    }

    const camera = cameraForBlocks(state.layout.blocks[0].cubes, state.render.size, new Vec3(291.1, 13.6), 1.3);
    setInitialCamera(state, camera.center, camera.angle);

    localizedCommentary(wt, 'transformer.summary', {}, null, 0);
}
