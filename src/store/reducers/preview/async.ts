import {createAsyncThunk} from '@reduxjs/toolkit';
import {setPreviewData} from '@store/reducers/preview/dispatchers';
import {IProductPreview, IPagePreview, IPricePlanPreview, TableType} from '../../type';

const getPreviewData = createAsyncThunk(
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

export default {
    getPreviewData
};