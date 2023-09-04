import { ReactNode } from 'react';

enum EColumnAlign {
    Left = 'left',
    Right = 'right',
    Center = 'center',
}

enum EColumnSize {
    Xs = 'extra-small',
    Sm = 'small',
    Mid = 'medium',
    Lg = 'large',
    Xl = 'extra-large',
}

enum EColumnType {
    Nr = 'nr',
    Number = 'number',
    Date = 'date',
    DateTime = 'datetime',
    String = 'string',
    Text = 'text',
    Unknown = 'unknown',
}

interface IColumnCustomStylingDto {
    align?: EColumnAlign;
    size?: EColumnSize;
}

interface ITableColumnConfig {
    columnDataType?: EColumnType; // For default type styling
    label: string;
    columnId: string;
    dataField: string;
    onCellClick?: () => void;
    renderData?: () => ReactNode;
    customStylingDto?: IColumnCustomStylingDto;
}

class TableColumnConfig {
    columnDataType: EColumnType; // For default type styling
    label: string;
    customStylingDto: IColumnCustomStylingDto;
    // rest:
    columnId: string;
    dataField: string;
    onCellClick?: () => void;
    renderData?: () => ReactNode;

    constructor({
        label,
        columnDataType,
        customStylingDto,
        columnId,
        dataField,
        onCellClick,
        renderData,
    }: ITableColumnConfig) {
        this.label = label || '';
        this.columnDataType = columnDataType || EColumnType.Unknown;
        this.customStylingDto = customStylingDto || {};

        this.columnId = columnId;
        this.dataField = dataField;
        this.onCellClick = onCellClick;
        this.renderData = renderData;
    }
}

interface ITableDataItemDto<FieldType> {
    columnKey: string;
    cellData: FieldType;
}

interface ITableRowProps<DtoType> {
    columnConfigList: ITableColumnConfig[];
    dataItem: DtoType;
    rowIndex: number;
    onRowClick?: () => void;
}

interface ITableProps {
    columnConfigList: ITableColumnConfig[];
    rowData: object[];
    onRowClick?: () => void;
}

export type { ITableColumnConfig, ITableDataItemDto, ITableProps, ITableRowProps };
export { TableColumnConfig, EColumnType, EColumnSize, EColumnAlign };
