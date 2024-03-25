import React, {useEffect, useState} from 'react';
import {Table, Row, Cell} from '@components/common/table';

import {IProductsTable} from '@custom-types';

export const Products = () => {
    const [table, setTable] = useState<null | IProductsTable[]>();

    useEffect(() => {
        if (!table) setTable(require('/mock/products.json'));
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