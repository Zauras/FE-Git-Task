import React, { useContext } from 'react';

import TableRow from '@/components/Table/components/TableRow';
import { TableStateContext } from '@/components/Table/state/TableState/TableStateContext';

const TableBody = () => {
    const { tableData } = useContext(TableStateContext);

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
                <TableRow key={JSON.stringify(dataItem)} dataItem={dataItem} rowIndex={i} />
            ))}
        </tbody>
    );
};

export default TableBody;
