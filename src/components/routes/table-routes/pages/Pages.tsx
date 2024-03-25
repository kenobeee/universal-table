import React, {useEffect, useState} from 'react';
import {Table, Row, Cell} from '@components/common/table';

import {IPageTable} from '@custom-types';

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