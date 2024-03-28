import React, {useCallback, useEffect, useState} from 'react';

import {Table} from '@components/common/table/Table';
import {ModalWrapper, TableCellEditModal} from '@components/common';

import {IProductsTable, TableType} from '@custom-types';

export const Products = () => {
    const [table, setTable] = useState<IProductsTable[] | null>(null);
    const [updatingRow, setUpdatingRow] = useState<IProductsTable | null>(null);

    const updateName = useCallback(() => {
        if (table && updatingRow) {
            const updatedTable = table.map((row) => {
                if (row.id === updatingRow?.id) {
                    return {...row, name: updatingRow.name};
                }

                return row;

            });

            setTable(updatedTable);
        }

        setUpdatingRow(null);
    }, [table, updatingRow]);

    useEffect(() => {
        if (!table) setTable(require('/mock/products.json'));
    }, []);

    return (
        <>
            {table && <Table
                data={table}
                type={TableType.products}
                // @ts-ignore
                updatingHandler={setUpdatingRow}/>}
            {updatingRow && <ModalWrapper
                isOpened={true}
                onClose={updateName}>
                <TableCellEditModal
                    value={updatingRow.name}
                    onUpdate={(value) =>
                        setUpdatingRow({...updatingRow, name: value})}
                    onSave={updateName}/></ModalWrapper>}
        </>
    );
};