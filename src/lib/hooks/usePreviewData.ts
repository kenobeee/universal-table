import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Dispatch, useCallback, useEffect, useMemo, useState} from 'react';

import {formatDate, isDateString} from '@lib/utils';
import {previewSelector} from '@store/reducers/preview/selectors';
import {getPreviewData, updateItem} from '@store/reducers/preview/dispatchers';

import {TableType, WritableFieldsMap} from '@store/type';

export type PreviewData = {
    data:{
        keys:string[]
        rows:(string | null | boolean)[][]
    } | null,
    mutatedFields:{id:number, value:string} | null,
    setMutatedFields:Dispatch<{id:number, value:string} | null>,
    startUpdateField:(rowIndex:number) => void,
    finishUpdateField:() => void
};

export const usePreviewData = ():PreviewData => {
    const {tableType} = useParams() as {tableType:TableType};
    const tableDataRedux = useSelector(previewSelector);

    const [data, setData] = useState<PreviewData['data']>(null);
    const [mutatedFields, setMutatedFields] = useState<PreviewData['mutatedFields']>(null);

    const tableData = useMemo(() => tableDataRedux[tableType], [tableType, tableDataRedux]);
    const neededMutableField = useMemo(() => WritableFieldsMap[tableType], [tableType]);

    // effects

    useEffect(() => {
        if (tableData.length > 0) {
            const keys = Object.keys(tableData[0]);

            const rows = tableData.map((row) => {
                const updatedRow = Object.values(row).map((value) => {
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
                });

                // added edit col
                updatedRow.push('edit');

                return updatedRow;
            }
            );

            // added edit col
            keys.push('');

            setData({keys, rows});
        } else {
            getPreviewData(tableType);
        }
    }, [tableData, tableType]);

    // foos

    const startUpdateField = useCallback((rowIndex:number) => {
        if (tableData) {
            const neededRow = tableData[rowIndex];

            setMutatedFields({
                id: neededRow.id,
                // @ts-ignore
                value: neededRow[neededMutableField]
            });
        }
    }, [tableData, neededMutableField]);

    const finishUpdateField = useCallback(() => {
        if (mutatedFields && tableType) {
            updateItem({
                id: mutatedFields.id,
                value: mutatedFields.value,
                fieldName: neededMutableField,
                type: tableType
            });

            setMutatedFields(null);
        }
    }, [mutatedFields, tableType, neededMutableField]);

    return {
        data,
        mutatedFields,
        setMutatedFields,
        startUpdateField,
        finishUpdateField
    };
};