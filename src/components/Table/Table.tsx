import React from 'react';

import TableSC from '@/components/Table/styles/Table.styles';
import { ITableColumnConfig, ITableProps, ITableRowProps } from '@/components/Table/Table.models';
import TableDataCellSC from '@/components/Table/styles/TableDataCell.styles';
import TableColumnHeaderSC from '@/components/Table/styles/TableColumnHeader.styles';

const TableDataCell = ({
    dataField,
    columnConfig,
}: {
    dataField: any;
    columnConfig: ITableColumnConfig;
}) => {
    return <TableDataCellSC columnConfig={columnConfig}>{dataField}</TableDataCellSC>;
};

const TableRow = ({ columnConfigList, dataItem, rowIndex, onRowClick }: ITableRowProps<any>) => {
    // const rowDto = columnConfigList.map((config) => {
    //     dataItem;
    // });

    return (
        <tr key={null} onClick={onRowClick}>
            {columnConfigList.map((columnConfig) => (
                <TableDataCell
                    dataField={dataItem[columnConfig.dataField]}
                    columnConfig={columnConfig}
                />
            ))}
        </tr>
    );
};

const Table = ({ columnConfigList, rowData, onRowClick }: ITableProps) => {
    return (
        <TableSC columnConfigList={columnConfigList}>
            <thead>
                <tr>
                    {columnConfigList.map((columnConfig) => (
                        <TableColumnHeaderSC columnConfig={columnConfig}>
                            {columnConfig.label}
                        </TableColumnHeaderSC>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rowData.length > 0 ? (
                    rowData.map((dataItem, i) => (
                        <TableRow
                            columnConfigList={columnConfigList}
                            dataItem={dataItem}
                            rowIndex={i}
                            onRowClick={onRowClick}
                        />
                    ))
                ) : (
                    <div className={'no-table-content-container'}>No results</div>
                )}
            </tbody>
        </TableSC>
    );
};

export default Table;
