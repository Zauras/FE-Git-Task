import { TColumnId } from '@/components/Table/models/column.models';
import { TDataFieldAccessor } from '@/components/Table/models/data.models';

interface IColumnSortConfig {
    columnId: string;
    sorting: EColumnSorting | null;
}

type TTableSorting = Record<TColumnId, IColumnSortState>;

interface IColumnSortDto extends IColumnSortConfig {
    dataAccessor: TDataFieldAccessor;
}

interface IColumnSortState extends IColumnSortDto {
    sortActionTimestamp: number;
}

enum EColumnSorting {
    Asc = 'asc',
    Desc = ' desc',
}

export type { IColumnSortState, IColumnSortDto, TTableSorting, IColumnSortConfig };
export { EColumnSorting };
