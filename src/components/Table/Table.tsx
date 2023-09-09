import React, { ReactNode, useContext } from 'react';

import { ITableProps } from '@/components/Table/Table.models';
import TableGridSC from '@/components/Table/styles/Table.styles';
import TableHead from '@/components/Table/components/TableHead/TableHead';
import TableBody from '@/components/Table/components/TableBody';
import {
    TableSettingsContext,
    TableSettingsProvider,
} from '@/components/Table/state/TableSettings/TableSettingsContext';
import { TableStateProvider } from '@/components/Table/state/TableState/TableStateContext';
import TableControlPanel from '@/components/Table/components/TableControlPanel/TableControlPanel';
import TableContainerSC from '@/components/Table/styles/TableContainer.styles';

const TableGrid = ({ children }: { children: ReactNode }) => {
    const { fullColumnConfigList } = useContext(TableSettingsContext);

    return <TableGridSC columnConfigList={fullColumnConfigList}>{children}</TableGridSC>;
};

const Table = ({ columnConfigList, rowData, tableConfig }: ITableProps) => {
    return (
        <TableSettingsProvider
            initColumnConfigList={columnConfigList}
            initTableConfig={tableConfig}
        >
            <TableStateProvider initData={rowData}>
                <TableContainerSC>
                    <TableControlPanel />

                    <TableGrid>
                        <TableHead />
                        <TableBody />
                    </TableGrid>
                </TableContainerSC>
            </TableStateProvider>
        </TableSettingsProvider>
    );
};

export default Table;
