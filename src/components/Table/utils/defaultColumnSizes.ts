import { EColumnDataType, EColumnSize } from '@/components/Table/models/column.models';

const columnWidthBySizeType: Record<EColumnSize, string> = {
    [EColumnSize.Xs]: 'minmax(3.5rem, 0.5fr)',
    [EColumnSize.Sm]: 'minmax(4rem, 1fr)',
    [EColumnSize.Mid]: 'minmax(4.5rem, 1.25fr)',
    [EColumnSize.Lg]: 'minmax(5rem, 1.5fr)',
    [EColumnSize.Xl]: 'minmax(5.5rem, 2fr)',
};

const defaultColumnSizeByDataType: Record<EColumnDataType, string> = {
    [EColumnDataType.Nr]: columnWidthBySizeType[EColumnSize.Xs],
    [EColumnDataType.Number]: columnWidthBySizeType[EColumnSize.Sm],
    [EColumnDataType.Date]: columnWidthBySizeType[EColumnSize.Mid],
    [EColumnDataType.DateTime]: columnWidthBySizeType[EColumnSize.Lg],
    [EColumnDataType.String]: columnWidthBySizeType[EColumnSize.Lg],
    [EColumnDataType.Text]: columnWidthBySizeType[EColumnSize.Xl],
    [EColumnDataType.Unknown]: columnWidthBySizeType[EColumnSize.Mid],
};

const columnWidthByDataType: Record<EColumnDataType, string> = {
    [EColumnDataType.Nr]: defaultColumnSizeByDataType[EColumnDataType.Nr],
    [EColumnDataType.Number]: defaultColumnSizeByDataType[EColumnDataType.Number],
    [EColumnDataType.Date]: defaultColumnSizeByDataType[EColumnDataType.Date],
    [EColumnDataType.DateTime]: defaultColumnSizeByDataType[EColumnDataType.DateTime],
    [EColumnDataType.String]: defaultColumnSizeByDataType[EColumnDataType.String],
    [EColumnDataType.Text]: defaultColumnSizeByDataType[EColumnDataType.Text],
    [EColumnDataType.Unknown]: defaultColumnSizeByDataType[EColumnDataType.Unknown],
};

const getColumnSizeByDataType = (columnDataType: EColumnDataType | undefined | null): string =>
    columnWidthByDataType[columnDataType || EColumnDataType.Unknown];

export { getColumnSizeByDataType, columnWidthByDataType, columnWidthBySizeType };
