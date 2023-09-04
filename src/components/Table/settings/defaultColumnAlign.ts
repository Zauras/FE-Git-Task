import {
    columnWidthByDataType,
    columnWidthBySizeType,
} from '@/components/Table/settings/defaultColumnSizes';
import { EColumnAlign, EColumnType } from '@/components/Table/Table.models';

const defaultColumnAlignByDataType: Record<EColumnType, EColumnAlign> = {
    [EColumnType.Nr]: EColumnAlign.Left,
    [EColumnType.Number]: EColumnAlign.Left,
    [EColumnType.Date]: EColumnAlign.Right,
    [EColumnType.DateTime]: EColumnAlign.Right,
    [EColumnType.String]: EColumnAlign.Left,
    [EColumnType.Text]: EColumnAlign.Right,
    [EColumnType.Unknown]: EColumnAlign.Center,
};

const getColumnAlignByDataType = (columnDataType: EColumnType | undefined | null): string =>
    columnWidthByDataType[columnDataType || EColumnType.Unknown];

export { getColumnAlignByDataType };
