import React from 'react';

import TableDataCellSC from '@/components/Table/components/TableBody/styles/TableDataCell.styles';
import { ITableColumnConfig } from '@/components/Table/models/config.models';
import { EInjectableColumnId } from '@/components/Table/models/column.models';

const TableInjectedDataCell = ({
    columnConfig,
    rowIndex,
}: {
    columnConfig: ITableColumnConfig;
    rowIndex: number;
}) => {
    switch (columnConfig.columnId) {
        case EInjectableColumnId.RowCount:
            return <TableDataCellSC columnConfig={columnConfig}>{rowIndex + 1}</TableDataCellSC>;

        default:
            return null;
    }
};

export default TableInjectedDataCell;
