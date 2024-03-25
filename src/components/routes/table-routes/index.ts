import React from 'react';

import {Pages} from './pages';
import {Products} from './products';
import {PricePlans} from './price-plans';

import {TableType} from '@custom-types';

type TableComponentMap = {
    [key in TableType]:() => React.JSX.Element
};

export const TablePages:TableComponentMap = {
    [TableType.pages]: Pages,
    [TableType.pricePlans]: PricePlans,
    [TableType.products]: Products
};