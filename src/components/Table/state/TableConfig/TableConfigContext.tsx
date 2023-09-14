import { createContext, ReactNode, useMemo } from 'react';

import { ITableColumnConfig, ITableConfigProps } from '@/components/Table/models/config.models';
import { IColumnSortConfig } from '@/components/Table/models/sorting.models';

interface TableConfigProviderProps {
    columnConfigList: ITableColumnConfig[];
    defaultSorting: IColumnSortConfig[];
    isTableSettingChangeable: boolean;
    isMultiSortSettingsEnabled: boolean;
}

const defaultTableConfig = {
    columnConfigList: [],
    defaultSorting: [],
    isTableSettingChangeable: true,
    isMultiSortSettingsEnabled: true,
};

const TableConfigContext = createContext<TableConfigProviderProps>(defaultTableConfig);

const TableConfigProvider = ({
    overrideDefaultTableConfig = {
        columnConfigList: [],
    },
    children,
}: {
    overrideDefaultTableConfig: ITableConfigProps;
    children: ReactNode;
}) => {
    const tableConfig = useMemo(
        () => ({ ...defaultTableConfig, ...overrideDefaultTableConfig }),
        [overrideDefaultTableConfig]
    );

    return (
        <TableConfigContext.Provider value={tableConfig}>{children}</TableConfigContext.Provider>
    );
};
export { TableConfigContext, TableConfigProvider };
