import React, { ReactNode, useContext } from 'react';

import { ITableProps } from '@/components/Table/Table.models';
import TableHead from '@/components/Table/components/TableHead/TableHead';
import TableBody from '@/components/Table/components/TableBody/TableBody';
import {
    TableSettingsContext,
    TableSettingsProvider,
} from '@/components/Table/state/TableSettings/TableSettingsContext';
import { TableStateProvider } from '@/components/Table/state/TableState/TableStateContext';
import TableControlPanel from '@/components/Table/components/TableControlPanel/TableControlPanel';
import TableFoot from '@/components/Table/components/TableFoot/TableFoot';
import TableSC from '@/components/Table/styles/Table.styles';
import TableGridSC from '@/components/Table/styles/TableGrid.styles';

const Table = ({ columnConfigList, rowData, tableConfig }: ITableProps) => {
    return (
        <TableSettingsProvider
            initColumnConfigList={columnConfigList}
            initTableConfig={tableConfig}
        >
            <TableStateProvider initData={rowData}>
                <TableSC>
                    <TableControlPanel />

                    {/*<TableGrid>*/}
                        <TableHead />
                        <TableBody />
                    {/*</TableGrid>*/}

                    <TableFoot />
                </TableSC>
            </TableStateProvider>
        </TableSettingsProvider>
    );
};

export default Table;
