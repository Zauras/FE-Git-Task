import { ITableColumnConfig } from '@/components/Table/models/config.models';
import { TColumnId } from '@/components/Table/models/column.models';

type TTableRowData = Record<TColumnId, string | number | null>;

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

export type { TTableRowData, ITableRowProps };
export { EPositionInRow };
