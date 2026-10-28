import { clamp } from "@/src/utils/data";
import { Mat4f } from "@/src/utils/matrix";
import { BoundingBox3d, Vec3 } from "@/src/utils/vector";
import { IGptModelLayout } from "../GptModelLayout";

export const modelCardMaxScale = 800;

export function modelCardScale(camPos: Vec3) {
    return clamp(camPos.dist(new Vec3(0, 0, -30)) / 500, 1, modelCardMaxScale);
}

// Shared by drawing and camera fitting so the distance-scaled card has one geometry.
export function modelCardLayout(scale: number, offset: Vec3) {
    const pinY = -60;
    const mtx = Mat4f.fromScaleTranslation(new Vec3(scale, scale, scale), new Vec3(0, pinY, 0).add(offset))
        .mul(Mat4f.fromTranslation(new Vec3(0, -pinY, 0)));
    const tl = new Vec3(-45, -97, 0);
    const br = new Vec3(45, -70, 0);
    const bounds = new BoundingBox3d(mtx.mulVec3Affine(tl), mtx.mulVec3Affine(br));
    return { mtx, tl, br, bounds };
}

export function outputTokenBox(layout: IGptModelLayout) {
    const softmax = layout.logitsSoftmax;
    const topMid = new Vec3(softmax.x + softmax.dx / 2, softmax.y + softmax.dy + layout.margin);
    const cellWidth = 6;
    const height = 10;
    const halfWidth = cellWidth * layout.shape.T / 2;
    const tl = new Vec3(topMid.x - halfWidth, topMid.y);
    const br = new Vec3(topMid.x + halfWidth, topMid.y + height);
    return { tl, br, cellWidth };
}
