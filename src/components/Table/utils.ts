import { TDataFieldAccessor } from '@/components/Table/Table.models';

const generateListKey = (prefix: string | number = ''): string => {
    return `${prefix}_${new Date().getTime()}`;
};

const getDataFieldValue = <T>(dataAccessor: TDataFieldAccessor, rowData: T) => {
    if (typeof dataAccessor === 'function') {
        return dataAccessor(rowData);
    }
    // @ts-ignore
    return rowData[dataAccessor];
};

export { generateListKey, getDataFieldValue };
