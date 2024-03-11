import {createAsyncThunk} from '@reduxjs/toolkit';

import {IProductPreview, IPagePreview, IPricePlanPreview, TableType} from '../../type';
import {setPreviewData} from '@store/reducers/preview/dispatchers';

export const getPreviewData = createAsyncThunk(
    'tableData',
    async (tableType:TableType) => {
        try {
            const data:(IProductPreview | IPagePreview | IPricePlanPreview)[] = await require(`/mock/${tableType}.json`);

            setPreviewData({[tableType]: data});
        }
        catch (e:any) {
            throw Error(e);
        }
    }
);