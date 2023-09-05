import React from 'react';

import { EColumnType, ITableRowProps } from '@/components/Table/Table.models';
import TableDataCell from '@/components/Table/components/TableDataCell';

const rowCountColumnConfig = {
    columnId: '0',
    label: 'Nr',
    dataField: 'nr',
    columnDataType: EColumnType.Nr,
};

const TableRow = ({
    columnConfigList,
    dataItem,
    rowIndex,
    onRowClick,
    isRowCountEnabled,
}: ITableRowProps<any>) => {
    // const rowDto = columnConfigList.map((config) => {
    //     dataItem;
    // });

    return (
        <tr key={null} onClick={onRowClick}>
            {isRowCountEnabled && (
                <TableDataCell dataField={rowIndex + 1} columnConfig={rowCountColumnConfig} />
            )}

            {columnConfigList.map((columnConfig) => (
                <TableDataCell
                    key={dataItem[columnConfig.dataField]}
                    dataField={dataItem[columnConfig.dataField]}
                    columnConfig={columnConfig}
                />
            ))}
        </tr>
    );
};

export default TableRow;
