import React, { useContext } from 'react';

import TableDataRow from '@/components/Table/components/TableBody/TableDataRow';
import { TableStateContext } from '@/components/Table/state/TableState/TableStateContext';
import TableGrid from '@/components/Table/components/TableGrid';

import styled from '@emotion/styled';

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
            <TableGrid>
                {tableData.map((dataItem, i) => (
                    <TableDataRow key={JSON.stringify(dataItem)} dataItem={dataItem} rowIndex={i} />
                ))}
            </TableGrid>
        </tbody>
    );
};

export default TableBody;
