import {PreviewInitialState, SetPreviewDataPA, UpdateItemPA} from '@store/type';

export const setPreviewData = (state:PreviewInitialState, action:SetPreviewDataPA) => ({
    ...state,
    ...(action.payload)
});

export const updateItem = (state:PreviewInitialState, action:UpdateItemPA) => {
    const {id, type, value, fieldName} = action.payload;

    // @ts-ignore
    state[type] = state[type].map((row) => row.id === id ? {...row, [fieldName]: value} : row);
};