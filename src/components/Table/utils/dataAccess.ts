import { TCellData, TDataFieldAccessFn } from '@/components/Table/models/data.models';

const generateListKey = (prefix: string | number = ''): string => {
    return `${prefix}_${new Date().getTime()}`;
};

const getDataFieldValue = <T>(
    dataAccessor: string | TDataFieldAccessFn,
    rowDataObj: T
): TCellData => {
    if (typeof dataAccessor === 'function') {
        return dataAccessor(rowDataObj);
    }
    // @ts-ignore
    return rowDataObj[dataAccessor];
};

export { generateListKey, getDataFieldValue };
