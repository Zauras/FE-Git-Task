import React, { ReactNode, useContext } from 'react';

import TableHead from '@/components/Table/components/TableHead/TableHead';
import TableBody from '@/components/Table/components/TableBody/TableBody';
import TableControlPanel from '@/components/Table/components/TableControlPanel/TableControlPanel';
import TableFoot from '@/components/Table/components/TableFoot/TableFoot';
import TableContainerSC from '@/components/Table/styles/Table.styles';
import { TableColumnsContext } from '@/components/Table/state/TableColumns/TableColumnsContext';
import { ITableProps } from '@/components/Table/models/table.models';
import TableMasterContextProvider from '@/components/Table/state/TableMasterContextProvider';

const TableContainer = ({ children }: { children: ReactNode }) => {
    const { fullColumnConfigList } = useContext(TableColumnsContext);
    return (
        <TableContainerSC fullColumnConfigList={fullColumnConfigList}>{children}</TableContainerSC>
    );
};

const Table = (tableProps: ITableProps) => {
    return (
        <TableMasterContextProvider {...tableProps}>
            <TableContainer>
                <TableControlPanel />

                <table>
                    <TableHead />
                    <TableBody />
                    <TableFoot />
                </table>
            </TableContainer>
        </TableMasterContextProvider>
    );
};

export default Table;
