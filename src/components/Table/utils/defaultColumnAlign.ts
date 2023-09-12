import { EColumnAlign, EColumnDataType } from '@/components/Table/models/column.models';

const defaultColumnAlignByDataType: Record<EColumnDataType, EColumnAlign> = {
    [EColumnDataType.Nr]: EColumnAlign.Left,
    [EColumnDataType.Number]: EColumnAlign.Right,
    [EColumnDataType.Date]: EColumnAlign.Right,
    [EColumnDataType.DateTime]: EColumnAlign.Right,
    [EColumnDataType.String]: EColumnAlign.Left,
    [EColumnDataType.Text]: EColumnAlign.Right,
    [EColumnDataType.Unknown]: EColumnAlign.Center,
};

const getColumnAlignByDataType = (columnDataType: EColumnDataType | undefined | null): string =>
    defaultColumnAlignByDataType[columnDataType || EColumnDataType.Unknown];

export { getColumnAlignByDataType };
