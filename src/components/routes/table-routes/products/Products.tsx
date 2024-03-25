import React, {useCallback, useEffect, useState} from 'react';

import {ModalWrapper, TableCellEditModal} from '@components/common';
import {Table, Row, Cell, EditBtn} from '@components/common/table';

import {IProductsTable} from '@custom-types';

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
            {!!table && <Table data={table}>
                {table.map((row) =>
                    <Row key={row.id}>
                        {Object.values(row).map((cell, i) =>
                            <Cell key={i} value={cell}/>)}
                        <EditBtn onClick={() => setUpdatingRow(row)}>
                            Edit</EditBtn>
                    </Row>)}</Table>}
            {!!updatingRow && <ModalWrapper
                isOpened={true}
                onClose={updateName}>
                <TableCellEditModal
                    value={updatingRow.name}
                    onUpdate={(value) =>
                        setUpdatingRow({...updatingRow, name: value})}
                    onSave={updateName}/>
            </ModalWrapper>}
        </>
    );
};