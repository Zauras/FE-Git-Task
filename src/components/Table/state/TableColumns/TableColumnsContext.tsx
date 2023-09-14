import { createContext, ReactNode, useContext, useMemo } from 'react';

import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import { TableConfigContext } from '@/components/Table/state/TableConfig/TableConfigContext';
import {
    ITableInjectableColumnConfig,
    rowCountColumnConfig,
} from '@/components/Table/models/column.models';
import { ITableColumnConfig } from '@/components/Table/models/config.models';
import { EPositionInRow } from '@/components/Table/models/row.models';

const TableColumnsContext = createContext<{
    autoGenColumnConfigList: ITableColumnConfig[];
    fullColumnConfigList: ITableColumnConfig[];
}>({
    autoGenColumnConfigList: [],
    fullColumnConfigList: [],
});

const TableColumnsProvider = ({ children }: { children: ReactNode }) => {
    const { columnConfigList } = useContext(TableConfigContext);
    const { isRowCountEnabled } = useContext(TableSettingsContext);

    const injectedColumnConfigList: ITableInjectableColumnConfig[] = useMemo(() => {
        const configList = [] as ITableInjectableColumnConfig[];

        if (isRowCountEnabled) {
            configList.push(rowCountColumnConfig);
        }

        return configList;
    }, [isRowCountEnabled]);

    const fullColumnConfigList = useMemo(() => {
        const fullColumnConfigList = [...columnConfigList];

        injectedColumnConfigList.forEach((injectedColumnConfig) => {
            const { positionInRow } = injectedColumnConfig;

            if (positionInRow == EPositionInRow.First || positionInRow === 0) {
                fullColumnConfigList.unshift(injectedColumnConfig);
            } else if (!isNaN(positionInRow as number) && positionInRow > 0) {
                fullColumnConfigList.splice(positionInRow as number, 0, injectedColumnConfig);
            } else {
                fullColumnConfigList.push(injectedColumnConfig);
            }
        });

        return fullColumnConfigList;
    }, [injectedColumnConfigList, columnConfigList]);

    const ctxValue = useMemo(
        () => ({
            autoGenColumnConfigList: injectedColumnConfigList,
            fullColumnConfigList: fullColumnConfigList,
        }),
        [fullColumnConfigList]
    );

    return <TableColumnsContext.Provider value={ctxValue}>{children}</TableColumnsContext.Provider>;
};
export { TableColumnsContext, TableColumnsProvider };
