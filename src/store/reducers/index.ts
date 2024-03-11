import {StoreInner} from '../type';
import {Reducer} from '@reduxjs/toolkit';

import {preview} from './preview';

type ReducerWrap = {
    [K in keyof StoreInner]:Reducer<StoreInner[K]>
};

export const reducer:ReducerWrap = {
    preview
};
