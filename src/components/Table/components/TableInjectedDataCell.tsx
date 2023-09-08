import React from 'react';

import TableDataCellSC from '@/components/Table/styles/TableDataCell.styles';
import { rowCountColumnConfig } from '@/components/Table/state/TableSettingsContext';

const TableInjectedDataCell = ({ columnConfig, rowIndex }: any) => {

    switch (columnConfig.columnId) {
        case rowCountColumnConfig.columnId:
            return <TableDataCellSC columnConfig={columnConfig}>{rowIndex + 1}</TableDataCellSC>;

        default:
            return null;
    }
};

export default TableInjectedDataCell;
