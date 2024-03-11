import {
    PreviewInitialState, SetPreviewDataPA

} from '@store/type';

export const setPreviewData = (state:PreviewInitialState, action:SetPreviewDataPA) => ({
    ...state,
    ...(action.payload)
});