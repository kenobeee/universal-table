import {ReactNode} from 'react';

export enum TableType {
    products = 'products',
    pricePlans = 'pricePlans',
    pages = 'pages',
}

export interface ICommonTable {
    id:number,
    active:boolean
}

export interface IPageTable extends ICommonTable {
    title:string
    updatedAt:Date,
    publishedAt:Date
}

export interface IPricePlansTable extends ICommonTable {
    description:string,
    createdAt:Date,
    removedAt:Date
}

export interface IProductsTable extends ICommonTable {
    name:string,
    options:{
        size:string,
        amount:number
    },
    createdAt:Date,
}

export type CommonTableData = IPageTable | IPricePlansTable | IProductsTable;

export type TableTypesDataMap<T extends TableType> =
    T extends TableType.pricePlans ? IPricePlansTable :
        T extends TableType.pages ? IPageTable :
            T extends TableType.products ? IProductsTable :
                never;

export interface ICellRenderData<T extends TableType> {
    key:keyof TableTypesDataMap<T>,
    width:number, // in percents
    render:(el:TableTypesDataMap<T>) => ReactNode,
}

export type CellViewResolverT = {[key in TableType]:ICellRenderData<key>[]};