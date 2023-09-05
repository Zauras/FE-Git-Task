import React from 'react';

import { ITableColumnConfig } from '@/components/Table/Table.models';
import TableColumnHeaderSC from '@/components/Table/styles/TableColumnHeader.styles';

const TableHead = ({ columnConfigList }: { columnConfigList: ITableColumnConfig[] }) => {
    return (
        <thead>
            <tr>
                {columnConfigList.map((columnConfig) => (
                    <TableColumnHeaderSC key={columnConfig.columnId} columnConfig={columnConfig}>
                        {columnConfig.label}
                    </TableColumnHeaderSC>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
