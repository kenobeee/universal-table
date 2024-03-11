import {PayloadAction as PA} from '@reduxjs/toolkit';

// preview

export enum TableType {
    products = 'products',
    pricePlans = 'pricePlans',
    pages = 'pages'
}

interface ICommonPreview {
    id:number
    active:boolean
}

export interface IProductPreview extends ICommonPreview {
    description:string
    createdAt:string
    removedAt:string
}

export interface IPricePlanPreview extends ICommonPreview {
    title:string
    updatedAt:string
    publishedAt:string
}

export interface IPagePreview extends ICommonPreview {
    name:string
    options:{
        size:string
        amount:number
    };
    createdAt:string
}

export type TablePreviewMap = {
    [TableType.products]:IProductPreview[]
    [TableType.pricePlans]:IPricePlanPreview[]
    [TableType.pages]:IPagePreview[]
};

export type PreviewInitialState = {
    [K in keyof typeof TableType]:TablePreviewMap[typeof TableType[K]];
};

export type SetPreviewDataPA = PA<Partial<PreviewInitialState>>;

// store

export type StoreInner = {
    preview:PreviewInitialState
};
