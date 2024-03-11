import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {formatDate, isDateString} from '@lib/utils';
import {previewSelector} from '@store/reducers/preview/selectors';
import {getPreviewData} from '@store/reducers/preview/dispatchers';

import {TableType} from '@store/type';

export type PreviewData = {keys:string[], rows:(string | null | boolean)[][]} | null;

export const usePreviewData = ():PreviewData => {
    const {tableType} = useParams();
    const tableData = useSelector(previewSelector)[tableType as TableType];

    const [preview, setPreview] = useState<PreviewData>(null);

    useEffect(() => {
        if (tableData.length > 0) {
            const keys = Object.keys(tableData[0]);
            const rows = tableData.map((row) =>
                Object.values(row).map((value) => {
                    const isNotPrimitive = typeof value === 'object';
                    const isDateType = isDateString(value as string);

                    // objects || arrays
                    if (isNotPrimitive) return Object.entries(value)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(', ');

                    // dates
                    if (isDateType) return formatDate(value);

                    // other primitives
                    return value;
                }));

            setPreview({keys, rows});
        } else {
            getPreviewData(tableType as TableType);
        }
    }, [tableData, tableType]);

    return preview;
};