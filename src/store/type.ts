import {PayloadAction as PA} from '@reduxjs/toolkit';

// preview

export enum TableType {
    products = 'products',
    pricePlans = 'pricePlans',
    pages = 'pages',
    new = 'new'
}

interface ICommonPreview {
    readonly id:number
    readonly active:boolean
}

export interface IPagePreview extends ICommonPreview {
    title:string
    readonly updatedAt:string
    readonly publishedAt:string
}

export interface IPricePlanPreview extends ICommonPreview {
    description:string
    readonly createdAt:string
    readonly removedAt:string
}

export interface IProductPreview extends ICommonPreview {
    name:string
    readonly options:{
        size:string
        amount:number
    };
    readonly createdAt:string
}

export interface INewPreview extends ICommonPreview {
    name:string
}

export const WritableFieldsMap:{[K in keyof typeof TableType]:keyof IPagePreview
    | keyof IPricePlanPreview | keyof IProductPreview | null} = {
        [TableType.products]: 'name',
        [TableType.pages]: 'title',
        [TableType.pricePlans]: 'description',
        [TableType.new]: null
    };

export type TablePreviewMap = {
    [TableType.products]:IProductPreview[]
    [TableType.pricePlans]:IPricePlanPreview[]
    [TableType.pages]:IPagePreview[]
    [TableType.new]:INewPreview[]
};

export type PreviewInitialState = {
    [K in keyof typeof TableType]:TablePreviewMap[typeof TableType[K]];
};

// export type FilterReadonly<T> = {
//     [K in keyof T]-?:T[K] extends Readonly<any> ? never : K;
// };

export type SetPreviewDataPA = PA<Partial<PreviewInitialState>>;
export type UpdateItemPA = PA<{type:TableType, id:number, fieldName:string, value:string}>;

// store

export type StoreInner = {
    preview:PreviewInitialState
};
