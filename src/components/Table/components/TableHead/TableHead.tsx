import React, { useContext } from 'react';

import TableColumnHeader from '@/components/Table/components/TableHead/components/TableColumnHeader';
import { TableColumnsContext } from '@/components/Table/state/TableColumns/TableColumnsContext';

const TableHead = () => {
    const { fullColumnConfigList } = useContext(TableColumnsContext);

    return (
        <thead>
            <tr>
                {fullColumnConfigList.map((columnConfig) => (
                    <TableColumnHeader key={columnConfig.columnId} columnConfig={columnConfig} />
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
