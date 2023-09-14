import { ITableColumnConfig } from '@/components/Table/models/config.models';

interface ITableRowProps<DtoType> {
    columnConfigList: ITableColumnConfig[];
    dataItem: DtoType;
    rowIndex: number;
    onRowClick?: () => void;
    isRowCountEnabled: boolean;
}

enum EPositionInRow {
    First = 'first',
    Last = 'last',
}

export type { ITableRowProps };
export { EPositionInRow };
