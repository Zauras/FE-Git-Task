import React from 'react';

import TableRow from '@/components/Table/components/TableRow';
import { ITableProps } from '@/components/Table/Table.models';

const TableBody = ({
    rowData,
    columnConfigList,
    onRowClick,
    isRowCountEnabled = true,
}: ITableProps) => {
    if (rowData.length == 0) {
        return (
            <tbody>
                <div className="no-table-content-container">No results</div>
            </tbody>
        );
    }

    return (
        <tbody>
            {rowData.map((dataItem, i) => (
                <TableRow
                    key={JSON.stringify(dataItem)}
                    isRowCountEnabled={Boolean(isRowCountEnabled)}
                    columnConfigList={columnConfigList}
                    dataItem={dataItem}
                    rowIndex={i}
                    onRowClick={onRowClick}
                />
            ))}
        </tbody>
    );
};

export default TableBody;
