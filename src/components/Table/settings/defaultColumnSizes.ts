import { EColumnSize, EColumnType } from '@/components/Table/Table.models';

const columnWidthBySizeType: Record<EColumnSize, string> = {
    [EColumnSize.Xs]: 'minmax(3.5rem, 0.5fr)',
    [EColumnSize.Sm]: 'minmax(4rem, 1fr)',
    [EColumnSize.Mid]: 'minmax(4.5rem, 1.25fr)',
    [EColumnSize.Lg]: 'minmax(5rem, 1.5fr)',
    [EColumnSize.Xl]: 'minmax(5.5rem, 2fr)',
};

const defaultColumnSizeByDataType: Record<EColumnType, string> = {
    [EColumnType.Nr]: columnWidthBySizeType[EColumnSize.Xs],
    [EColumnType.Number]: columnWidthBySizeType[EColumnSize.Sm],
    [EColumnType.Date]: columnWidthBySizeType[EColumnSize.Mid],
    [EColumnType.DateTime]: columnWidthBySizeType[EColumnSize.Lg],
    [EColumnType.String]: columnWidthBySizeType[EColumnSize.Mid],
    [EColumnType.Text]: columnWidthBySizeType[EColumnSize.Xl],
    [EColumnType.Unknown]: columnWidthBySizeType[EColumnSize.Mid],
};

const columnWidthByDataType: Record<EColumnType, string> = {
    [EColumnType.Nr]: defaultColumnSizeByDataType[EColumnType.Nr],
    [EColumnType.Number]: defaultColumnSizeByDataType[EColumnType.Number],
    [EColumnType.Date]: defaultColumnSizeByDataType[EColumnType.Date],
    [EColumnType.DateTime]: defaultColumnSizeByDataType[EColumnType.DateTime],
    [EColumnType.String]: defaultColumnSizeByDataType[EColumnType.String],
    [EColumnType.Text]: defaultColumnSizeByDataType[EColumnType.Text],
    [EColumnType.Unknown]: defaultColumnSizeByDataType[EColumnType.Unknown],
};

const getColumnSizeByDataType = (columnDataType: EColumnType | undefined | null): string =>
    columnWidthByDataType[columnDataType || EColumnType.Unknown];

export { getColumnSizeByDataType, columnWidthByDataType, columnWidthBySizeType };
