import React, { useContext } from 'react';

import TableDataCell from '@/components/Table/components/TableBody/TableDataCell';
import TableInjectedDataCell from '@/components/Table/components/TableBody/TableInjectedDataCell';
import { TableColumnsContext } from '@/components/Table/state/TableColumns/TableColumnsContext';
import { TTableRowData } from '@/components/Table/models/data.models';

const TableDataRow = ({ rowData, rowIndex }: { rowData: TTableRowData; rowIndex: number }) => {
    const { fullColumnConfigList } = useContext(TableColumnsContext);

    return (
        <tr>
            {fullColumnConfigList.map((columnConfig) => {
                const { columnId, isAutoGenerated } = columnConfig;

                if (isAutoGenerated) {
                    return (
                        <TableInjectedDataCell
                            key={`${columnConfig.columnId}-${rowIndex}`}
                            columnConfig={columnConfig}
                            rowIndex={rowIndex}
                        />
                    );
                }

                const cellData = rowData[columnId];

                return (
                    <TableDataCell
                        key={`${rowIndex}_${cellData}`}
                        cellData={cellData}
                        rowData={rowData}
                        columnConfig={columnConfig}
                    />
                );
            })}
        </tr>
    );
};

export default TableDataRow;