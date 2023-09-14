import { ReactNode } from 'react';

import { TColumnId } from '@/components/Table/models/column.models';

type TCellData = string | number | null;
type TCellContent = TCellData | ReactNode;

type TTableRowData = Record<TColumnId, TCellData>;
type TTableData = TTableRowData[];

type TDataFieldAccessFn = (dataObj: any) => TCellData;
type TDataFieldAccessor = string | TDataFieldAccessFn;

export type {
    TCellData,
    TCellContent,
    TTableRowData,
    TTableData,
    TDataFieldAccessor,
    TDataFieldAccessFn,
};
