import {TableType} from '@components/app/App';

type Product = {
    id:number;
    description:string;
    active:boolean;
    createdAt:string;
    removedAt:string;
};

type PricePlan = {
    id:number;
    title:string;
    active:boolean;
    updatedAt:string;
    publishedAt:string;
};

type Page = {
    id:number;
    name:string;
    options:{
        size:string;
        amount:number;
    };
    active:boolean;
    createdAt:string;
};

type ObjectType<T> =
    T extends TableType.products ? Product :
        T extends TableType.pricePlans ? PricePlan :
            T extends TableType.pages ? Page :
                never;

export function getTableData<T extends TableType>(tableType:T):ObjectType<T>[] { return require(`./mock/${tableType}.json`);}