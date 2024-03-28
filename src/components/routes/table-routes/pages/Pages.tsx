import React, {useCallback, useEffect, useState} from 'react';

import {Table} from '@components/common/table';
import {ModalWrapper, TableCellEditModal} from '@components/common';

import {IPageTable, TableType} from '@custom-types';

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
            {table && <Table
                data={table}
                type={TableType.pages}
                // @ts-ignore
                updatingHandler={setUpdatingRow}/>}
            {updatingRow && <ModalWrapper
                isOpened={true}
                onClose={updateTitle}>
                <TableCellEditModal
                    value={updatingRow.title}
                    onUpdate={(value) =>
                        setUpdatingRow({...updatingRow, title: value})}
                    onSave={updateTitle}/></ModalWrapper>}
        </>
    );
};