import React, {useCallback, useEffect, useState} from 'react';

import {Table} from '@components/common/table';
import {ModalWrapper, TableCellEditModal} from '@components/common';

import {IPricePlansTable, TableType} from '@custom-types';

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
            {table && <Table
                data={table}
                type={TableType.pricePlans}
                // @ts-ignore
                updatingHandler={setUpdatingRow}/>}
            {updatingRow && <ModalWrapper
                isOpened={true}
                onClose={updateDescription}>
                <TableCellEditModal
                    value={updatingRow.description}
                    onUpdate={(value) =>
                        setUpdatingRow({...updatingRow, description: value})}
                    onSave={updateDescription}/></ModalWrapper>}
        </>
    );
};