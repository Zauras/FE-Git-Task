import React, { ReactNode, useContext } from 'react';

import { ITableProps } from '@/components/Table/Table.models';
import TableSC from '@/components/Table/styles/Table.styles';
import TableHead from '@/components/Table/components/TableHead/TableHead';
import TableBody from '@/components/Table/components/TableBody';
import {
    TableSettingsContext,
    TableSettingsProvider,
} from '@/components/Table/state/TableSettingsContext';
import { TableStateProvider } from '@/components/Table/state/TableStateContext';

const TableComponent = ({ children }: { children: ReactNode }) => {
    const { fullColumnConfigList } = useContext(TableSettingsContext);

    return <TableSC columnConfigList={fullColumnConfigList}>{children}</TableSC>;
};

const Table = (tableProps: ITableProps) => {
    const { columnConfigList, isRowCountEnabled = true, rowData } = tableProps;

    return (
        <TableSettingsProvider
            initColumnConfigList={columnConfigList}
            initIsRowCountEnabled={isRowCountEnabled}
        >
            <TableStateProvider initData={rowData}>
                <TableComponent>
                    <TableHead />

                    <TableBody />
                </TableComponent>
            </TableStateProvider>
        </TableSettingsProvider>
    );
};

export default Table;
