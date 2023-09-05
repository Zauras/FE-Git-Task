import React from 'react';

import { EColumnType, ITableColumnConfig, ITableProps } from '@/components/Table/Table.models';
import TableSC from '@/components/Table/styles/Table.styles';
import TableHead from '@/components/Table/components/TableHead';
import TableBody from '@/components/Table/components/TableBody';

const rowCountColumnConfig = {
    columnId: '0',
    label: 'Nr',
    dataField: 'nr',
    columnDataType: EColumnType.Nr,
};

const Table = (tableProps: ITableProps) => {
    const { columnConfigList, isRowCountEnabled = true } = tableProps;

    const aggrColumnConfigList: ITableColumnConfig[] = isRowCountEnabled
        ? [rowCountColumnConfig, ...columnConfigList]
        : columnConfigList;

    return (
        <TableSC columnConfigList={aggrColumnConfigList}>
            <TableHead columnConfigList={aggrColumnConfigList} />

            <TableBody {...tableProps} />
        </TableSC>
    );
};

export default Table;
