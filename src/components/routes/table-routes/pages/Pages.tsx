import React, {useCallback, useEffect, useState} from 'react';

import {ModalWrapper, TableCellEditModal} from '@components/common';
import {Table, Row, Cell, EditBtn} from '@components/common/table';

import {IPageTable} from '@custom-types';

export const Pages = () => {
    const [table, setTable] = useState<IPageTable[] | null>(null);
    const [updatingRow, setUpdatingRow] = useState<IPageTable | null>(null);

    const updateTitle = useCallback(() => {
        if (table && updatingRow) {
            const updatedTable = table.map((row) => {
                if (row.id === updatingRow?.id) {
                    return {...row, title: updatingRow.title};
                }

                return row;

            });

            setTable(updatedTable);
        }

        setUpdatingRow(null);
    }, [table, updatingRow]);

    useEffect(() => {
        if (!table) setTable(require('/mock/pages.json'));
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
                onClose={updateTitle}>
                <TableCellEditModal
                    value={updatingRow.title}
                    onUpdate={(value) =>
                        setUpdatingRow({...updatingRow, title: value})}
                    onSave={updateTitle}/>
            </ModalWrapper>}
        </>
    );
};