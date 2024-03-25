import React, {useEffect, useState} from 'react';
import {Table, Row, Cell} from '@components/common/table-new';

interface ICommonTable {
    id:number,
    active:boolean
}

interface IPageTable extends ICommonTable {
    title:string
    updatedAt:Date,
    publishedAt:Date
}

interface IPricePlansTable extends ICommonTable {
    description:string,
    createdAt:Date,
    removedAt:Date
}

interface IProductsTable extends ICommonTable {
    name:string,
    options:{
        size:string,
        amount:number
    },
    createdAt:Date,
}

export type CommonTableData<T = IPageTable & IPricePlansTable & IProductsTable> = Partial<T>[];

export const Pages = () => {
    const [table, setTable] = useState<null | IPageTable[]>();

    useEffect(() => {
        if (!table) setTable(require('/mock/pages.json'));
    }, []);

    return table
        ? <Table data={table}>
            {table.map((row) =>
                <Row key={row.id}>
                    {Object.values(row).map((cell, i) =>
                        <Cell key={i} value={cell}/>)}
                </Row>)}</Table>
        : <></>;
};