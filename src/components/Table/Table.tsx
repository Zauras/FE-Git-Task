import React, { ReactNode, useContext, useMemo } from 'react';

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

const defaultTableConfig = {
    defaultSorting: [],
    isMultiSortEnabled: true,
    isMultiSortingSwitchRender: true,
    isRowCountEnabled: true,
    isSearchEnabled: true,
};

const Table = ({ columnConfigList, rowData, tableConfig }: ITableProps) => {
    const tableConfigWithDefault = useMemo(
        () => ({ ...defaultTableConfig, ...tableConfig }),
        [tableConfig]
    );

    return (
        <TableSettingsProvider
            initColumnConfigList={columnConfigList}
            initIsRowCountEnabled={tableConfigWithDefault.isRowCountEnabled}
        >
            <TableStateProvider
                initData={rowData}
                defaultSorting={tableConfigWithDefault.defaultSorting}
            >
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
