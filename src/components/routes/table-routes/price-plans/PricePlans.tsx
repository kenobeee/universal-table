import React, {useEffect, useState} from 'react';
import {Table, Row, Cell} from '@components/common/table';

import {IPricePlansTable} from '@custom-types';

export const PricePlans = () => {
    const [table, setTable] = useState<null | IPricePlansTable[]>();

    useEffect(() => {
        if (!table) setTable(require('/mock/pricePlans.json'));
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