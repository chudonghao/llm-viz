import React from 'react';
import { useProgramState } from '../Sidebar';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Vec3 } from '@/src/utils/vector';
import { Mat4f } from '@/src/utils/matrix';
import { useI18n } from '../i18n/LanguageProvider';
import { cameraForBlocks } from '../Camera';
import { genGptModelLayout } from '../GptModelLayout';

export const ModelSelectorToolbar: React.FC<{
}> = () => {
    const { t } = useI18n();
    let progState = useProgramState();

    function showModel(egIndex: number) {
        const example = progState.examples[egIndex] ?? progState.mainExample;
        const layout = egIndex === -1 ? progState.layout : (example.layout ??= genGptModelLayout(example.shape));
        progState.camera.desiredCamera = cameraForBlocks(layout.cubes, progState.render.size,
            example.camera?.angle ?? progState.camera.angle, 1.2, example.offset);
        progState.markDirty();
    }

    function makeButton(egIndex: number) {

        let example = progState.examples[egIndex] ?? progState.mainExample;

        let isEnabled = example.enabled;
        let isActive = progState.currExampleId === egIndex;

        function handleClick() {
            if (!isEnabled) {
                example.enabled = true;
            }
            progState.currExampleId = egIndex;
            showModel(egIndex);
        }

        return <button type="button" aria-pressed={isActive} className={clsx('m-2 px-2 py-1 rounded shadow cursor-pointer hover:bg-blue-300', isActive ? 'bg-blue-200' : 'bg-white')} onClick={handleClick}>
            {example.name}
        </button>;
    }

    function onExpandClick() {
        showModel(progState.currExampleId);
    }

    function onMagnifyClick() {
        let example = progState.examples[progState.currExampleId] ?? progState.mainExample;
        let layout = example.layout ?? progState.layout;

        // new Vec3(3.347, 48.000, -2.634), new Vec3(270.000, 4.500, 1.199)

        // new Vec3(-1.771, 0.750, -4.470), new Vec3(270.000, 4.500, 0.739)

        let obj = layout.residual0;
        let modelTarget = new Vec3(obj.x, obj.y, obj.z);
        let modelMtx = progState.camera.modelMtx.mul(Mat4f.fromTranslation(example.offset))

        let center = modelMtx.mulVec3Proj(modelTarget);
        let zoom = progState.currExampleId === -1 ? 0.7 : 4;
        progState.camera.desiredCamera = {
            center, angle: new Vec3(270, 4.5, zoom),
        };
        progState.markDirty();

    }

    return <div className='absolute top-0 left-0 flex flex-col'>
        <div className='mt-2 ml-2 flex flex-row'>
            {makeButton(0)}
            {makeButton(-1)}
            {makeButton(1)}
            {makeButton(2)}
        </div>
        <div className='ml-2 flex flex-row'>
            <button type="button" title={t('controls.showModel')} aria-label={t('controls.showModel')} className={clsx('m-2 p-2 bg-white min-w-[2rem] flex justify-center rounded shadow cursor-pointer hover:bg-blue-300')} onClick={onExpandClick}>
                <FontAwesomeIcon icon={faExpand} />
            </button>
            <button type="button" title={t('controls.focusInput')} aria-label={t('controls.focusInput')} className={clsx('m-2 p-2 bg-white min-w-[2rem] flex justify-center rounded shadow cursor-pointer hover:bg-blue-300')} onClick={onMagnifyClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </div>;

};
