import { ReactNode } from 'react';

import { TableSettingsProvider } from '@/components/Table/state/TableSettings/TableSettingsContext';
import { TableConfigProvider } from '@/components/Table/state/TableConfig/TableConfigContext';
import { TableSortingProvider } from '@/components/Table/state/TableSorting/TableSortingContext';
import { TableSearchProvider } from '@/components/Table/state/TableSearch/TableSearchContext';
import { TableDataProvider } from '@/components/Table/state/TableData/TableDataContext';
import { ITableProps } from '@/components/Table/models/table.models';
import { TableColumnsProvider } from '@/components/Table/state/TableColumns/TableColumnsContext';
import { TableLoadingProvider } from '@/components/Table/state/TableLoading/TableLoadingContext';

const TableMasterContextProvider = ({
    isLoading,
    tableConfig,
    tableSettings,
    tableData,
    children,
}: ITableProps & { children: ReactNode }) => {
    return (
        <TableConfigProvider overrideDefaultTableConfig={tableConfig}>
            <TableSettingsProvider overrideDefaultTableSettings={tableSettings}>
                <TableColumnsProvider>
                    <TableSearchProvider>
                        <TableSortingProvider>
                            <TableDataProvider initData={tableData}>
                                <TableLoadingProvider isLoading={isLoading}>
                                    {children}
                                </TableLoadingProvider>
                            </TableDataProvider>
                        </TableSortingProvider>
                    </TableSearchProvider>
                </TableColumnsProvider>
            </TableSettingsProvider>
        </TableConfigProvider>
    );
};

export default TableMasterContextProvider;
