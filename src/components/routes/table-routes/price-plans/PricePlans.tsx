import React, {useCallback, useEffect, useState} from 'react';

import {ModalWrapper, TableCellEditModal} from '@components/common';
import {Table, Row, Cell, EditBtn} from '@components/common/table';

import {IPricePlansTable} from '@custom-types';

export const PricePlans = () => {
    const [table, setTable] = useState<IPricePlansTable[] | null>(null);
    const [updatingRow, setUpdatingRow] = useState<IPricePlansTable | null>(null);

    const updateDescription = useCallback(() => {
        if (table && updatingRow) {
            const updatedTable = table.map((row) => {
                if (row.id === updatingRow?.id) {
                    return {...row, description: updatingRow.description};
                }

                return row;

            });

            setTable(updatedTable);
        }

        setUpdatingRow(null);
    }, [table, updatingRow]);

    useEffect(() => {
        if (!table) setTable(require('/mock/pricePlans.json'));
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
                onClose={updateDescription}>
                <TableCellEditModal
                    value={updatingRow.description}
                    onUpdate={(value) =>
                        setUpdatingRow({...updatingRow, description: value})}
                    onSave={updateDescription}/>
            </ModalWrapper>}
        </>
    );
};