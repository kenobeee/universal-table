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

export type CommonTableData<T = IPageTable & IPricePlansTable & IProductsTable> = Partial<T>[];

// export interface INewPreview extends ICommonPreview {
//     name:string
// }
//
// export const WritableFieldsMap:{[K in keyof typeof TableType]:keyof IPagePreview
//     | keyof IPricePlanPreview | keyof IProductPreview | null} = {
//     [TableType.products]: 'name',
//     [TableType.pages]: 'title',
//     [TableType.pricePlans]: 'description',
//     [TableType.new]: null
// };
//
// export type TablePreviewMap = {
//     [TableType.products]:IProductPreview[]
//     [TableType.pricePlans]:IPricePlanPreview[]
//     [TableType.pages]:IPagePreview[]
//     [TableType.new]:INewPreview[]
// };
//
// export type PreviewInitialState = {
//     [K in keyof typeof TableType]:TablePreviewMap[typeof TableType[K]];
// };
//
// // export type FilterReadonly<T> = {
// //     [K in keyof T]-?:T[K] extends Readonly<any> ? never : K;
// // };
//
// export type SetPreviewDataPA = PA<Partial<PreviewInitialState>>;
// export type UpdateItemPA = PA<{type:TableType, id:number, fieldName:string, value:string}>;
