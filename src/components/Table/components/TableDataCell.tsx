import React from 'react';

import { ITableColumnConfig } from '@/components/Table/Table.models';
import TableDataCellSC from '@/components/Table/styles/TableDataCell.styles';

const TableDataCell = ({
    dataField,
    columnConfig,
}: {
    dataField: any;
    columnConfig: ITableColumnConfig;
}) => {
    // console.log('render:', dataField);
    return <TableDataCellSC columnConfig={columnConfig}>{dataField}</TableDataCellSC>;
};

export default TableDataCell;
