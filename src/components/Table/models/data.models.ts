import { TTableRowData } from '@/components/Table/models/row.models';

type TDataFieldAccessFn = <T>(rowData: T) => string | number | null;

type TDataFieldAccessor = string | TDataFieldAccessFn;

type TTableData = TTableRowData[];

interface ITableDataItemDto<FieldType> {
    columnKey: string;
    cellData: FieldType;
}

export type { TDataFieldAccessFn, TDataFieldAccessor, TTableData, ITableDataItemDto };
