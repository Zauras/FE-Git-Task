import React, { useContext } from 'react';

import TableDataRow from '@/components/Table/components/TableBody/TableDataRow';
import { TableDataContext } from '@/components/Table/state/TableData/TableDataContext';

const TableBody = () => {
    const { tableData } = useContext(TableDataContext);

    if (tableData.length == 0) {
        return (
            <tbody>
                <div className="no-table-content-container">No results</div>
            </tbody>
        );
    }

    return (
        <tbody>
            {tableData.map((dataItem, i) => (
                <TableDataRow key={JSON.stringify(dataItem)} dataItem={dataItem} rowIndex={i} />
            ))}
        </tbody>
    );
};

export default TableBody;
