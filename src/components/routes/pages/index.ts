import React from 'react';

import {Pages} from './Pages';

import {TableType} from '@custom-types';

type TableComponentMap = {
    [key in TableType]:() => React.JSX.Element
};

export const TablePages:TableComponentMap = {
    [TableType.pages]: Pages,
    // todo
    [TableType.pricePlans]: Pages,
    [TableType.products]: Pages
};