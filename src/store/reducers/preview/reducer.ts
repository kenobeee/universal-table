import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {PreviewInitialState} from '../../type';

export const initialState:PreviewInitialState = {
    pages: [],
    products: [],
    pricePlans: [],
    new: []
};

export const {actions, reducer} = createSlice({
    name: 'preview',
    initialState,
    reducers,
});
