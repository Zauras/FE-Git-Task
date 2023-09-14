import React, { useContext } from 'react';

import TableDataRow from '@/components/Table/components/TableBody/TableDataRow';
import { TableDataContext } from '@/components/Table/state/TableData/TableDataContext';
import { TableLoadingContext } from '@/components/Table/state/TableLoading/TableLoadingContext';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';

const TableBody = () => {
    const { tableData } = useContext(TableDataContext);
    const { isLoading } = useContext(TableLoadingContext);

    return (
        <tbody>
            <LoadingScreen isLoading={isLoading}>
                {tableData.length == 0 ? (
                    <tr className="empty-table-content">
                        <td>No results</td>
                    </tr>
                ) : (
                    tableData.map((dataItem, i) => (
                        <TableDataRow
                            key={JSON.stringify(dataItem)}
                            rowData={dataItem}
                            rowIndex={i}
                        />
                    ))
                )}
            </LoadingScreen>
        </tbody>
    );
};

export default TableBody;
