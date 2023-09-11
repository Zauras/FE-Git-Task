import React from 'react';

import TableDataCellSC from '@/components/Table/components/TableBody/styles/TableDataCell.styles';
import { rowCountColumnConfig } from '@/components/Table/state/TableSettings/TableSettingsContext';
import { ITableColumnConfig } from '@/components/Table/Table.models';

const TableInjectedDataCell = ({
    columnConfig,
    rowIndex,
}: {
    columnConfig: ITableColumnConfig;
    rowIndex: number;
}) => {
    switch (columnConfig.columnId) {
        case rowCountColumnConfig.columnId:
            return <TableDataCellSC columnConfig={columnConfig}>{rowIndex + 1}</TableDataCellSC>;

        default:
            return null;
    }
};

export default TableInjectedDataCell;
