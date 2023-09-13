import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import { TableConfigContext } from '@/components/Table/state/TableConfig/TableConfigContext';
import { TColumnId } from '@/components/Table/models/column.models';
import {
    IColumnSortDto,
    IColumnSortState,
    TTableSorting,
} from '@/components/Table/models/sorting.models';

const TableSortingContext = createContext<{
    tableSorting: Record<TColumnId, IColumnSortState>;
    setSorting: (columnSortDto: IColumnSortDto) => void;
    resetSorting: () => void;
}>({
    tableSorting: {},
    setSorting: (columnSortDto) => null,
    resetSorting: () => null,
});

const TableSortingProvider = ({ children }: { children: ReactNode }) => {
    const { columnConfigList, defaultSorting } = useContext(TableConfigContext);
    const { isMultiSortEnabled } = useContext(TableSettingsContext);

    const defaultTableSorting = useMemo(
        () =>
            defaultSorting.reduce(
                (acc, columnSortDto, i) => {
                    const columnConfig = columnConfigList.find(
                        (columnConfig) => columnSortDto.columnId === columnConfig.columnId
                    );

                    if (!columnConfig) {
                        return acc;
                    }

                    acc[columnSortDto.columnId] = {
                        ...columnSortDto,
                        dataAccessor: columnConfig.dataAccessor,
                        sortActionTimestamp: Date.now() + i,
                    };

                    return acc;
                },
                {} as Record<string, IColumnSortState>
            ),
        [defaultSorting]
    );

    const [tableSorting, setTableSorting] = useState<TTableSorting>(defaultTableSorting);

    const handleSetSorting = useCallback(
        (sortingDto: IColumnSortDto) => {
            const { columnId, dataAccessor, sorting } = sortingDto;
            if (!sorting) {
                let newTableSorting: TTableSorting = {};

                if (isMultiSortEnabled) {
                    newTableSorting = { ...tableSorting };
                    delete newTableSorting[columnId];
                }

                setTableSorting(newTableSorting);
            } else {
                const sortActionTimestamp = Date.now();
                let newTableSorting: TTableSorting = {
                    [columnId]: { columnId, dataAccessor, sorting, sortActionTimestamp },
                };

                if (isMultiSortEnabled) {
                    newTableSorting = {
                        ...tableSorting,
                        ...newTableSorting,
                    };
                }

                setTableSorting(newTableSorting);
            }
        },
        [tableSorting]
    );

    const resetSortingToDefault = useCallback(() => {
        setTableSorting(defaultTableSorting);
    }, [defaultTableSorting]);

    const ctxValue = useMemo(
        () => ({
            tableSorting,
            setSorting: handleSetSorting,
            resetSorting: resetSortingToDefault,
        }),
        [tableSorting]
    );

    return <TableSortingContext.Provider value={ctxValue}>{children}</TableSortingContext.Provider>;
};

export { TableSortingContext, TableSortingProvider };
