import React, { ReactNode, useContext, useMemo } from 'react';

import { ITableProps, TDefaultSortingConfig } from '@/components/Table/Table.models';
import TableSC from '@/components/Table/styles/Table.styles';
import TableHead from '@/components/Table/components/TableHead/TableHead';
import TableBody from '@/components/Table/components/TableBody';
import {
    TableSettingsContext,
    TableSettingsProvider,
} from '@/components/Table/state/TableSettings/TableSettingsContext';
import { TableStateProvider } from '@/components/Table/state/TableState/TableStateContext';

const TableComponent = ({ children }: { children: ReactNode }) => {
    const { fullColumnConfigList } = useContext(TableSettingsContext);

    return <TableSC columnConfigList={fullColumnConfigList}>{children}</TableSC>;
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
                <TableComponent>
                    <TableHead />

                    <TableBody />
                </TableComponent>
            </TableStateProvider>
        </TableSettingsProvider>
    );
};

export default Table;
