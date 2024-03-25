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