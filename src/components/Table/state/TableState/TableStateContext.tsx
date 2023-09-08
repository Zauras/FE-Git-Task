import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { getDataFieldValue } from '@/components/Table/utils';
import {
    IColumnSortConfig,
    TColumnId,
    TDataFieldAccessor,
    TDefaultSortingConfig,
    TTableData,
} from '@/components/Table/Table.models';
import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';

const TableStateContext = createContext<{
    tableData: any[];
    tableSorting: Record<TColumnId, IColumnSortState>;
    setSorting: (columnSortDto: IColumnSortDto) => void;
}>({
    tableData: [],
    tableSorting: {},
    setSorting: (columnSortDto) => null,
});

enum EColumnSorting {
    Asc = 'asc',
    Desc = ' desc',
}

type TTableSorting = Record<TColumnId, IColumnSortState>;

interface IColumnSortDto extends IColumnSortConfig {
    dataAccessor: TDataFieldAccessor;
}

interface IColumnSortState extends IColumnSortDto {
    sortActionTimestamp: number;
}

const getSortedTableData = ({
    tableData,
    tableSorting,
}: {
    tableData: TTableData;
    tableSorting: TTableSorting;
}) => {
    const data = [...tableData];
    const tableSortingList = Object.values(tableSorting).sort((aSort, bSort) =>
        aSort.sortActionTimestamp > bSort.sortActionTimestamp ? 1 : -1
    );

    tableSortingList.forEach(({ columnId, sorting }) =>
        data.sort((aRow, bRow) => {
            const aVal = aRow[columnId] || 0;
            const bVal = bRow[columnId] || 0;

            if (sorting === EColumnSorting.Asc) {
                return aVal > bVal ? 1 : -1;
            }
            if (sorting === EColumnSorting.Desc) {
                return aVal < bVal ? 1 : -1;
            }
            return 1;
        })
    );

    return data;
};

const TableStateProvider = ({
    initData = [],
    defaultSorting = [],
    children,
}: {
    initData: any[];
    defaultSorting?: TDefaultSortingConfig;
    children: ReactNode;
}) => {
    const { columnConfigList } = useContext(TableSettingsContext);

    const [tableSorting, setTableSorting] = useState<Record<TColumnId, IColumnSortState>>(() =>
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
        )
    );

    const [tableData, setTableData] = useState(() => {
        const initTableData = initData.map((dataRow) => {
            return columnConfigList.reduce(
                (acc, { columnId, dataAccessor }) => {
                    acc[columnId] = getDataFieldValue(dataAccessor, dataRow);
                    return acc;
                },
                {} as Record<TColumnId, number | string | null>
            );
        });
        return initTableData;
    });

    console.log('init', tableSorting);

    const handleSetSorting = useCallback(
        (sortingDto: IColumnSortDto) => {
            const { columnId, dataAccessor, sorting } = sortingDto;

            console.log('==================================================');
            console.log('sortingDto', sortingDto);
            console.log('before', tableSorting);

            if (!sorting) {
                const { [columnId]: _, ...newTableSorting } = tableSorting;
                setTableSorting(newTableSorting);
            } else {
                const sortActionTimestamp = Date.now();
                console.log('after', {
                    ...tableSorting,
                    [columnId]: { columnId, dataAccessor, sorting, sortActionTimestamp },
                });
                setTableSorting({
                    ...tableSorting,
                    [columnId]: { columnId, dataAccessor, sorting, sortActionTimestamp },
                });
            }
        },
        [tableSorting]
    );

    const aggrTableData = useMemo(() => {
        return getSortedTableData({ tableData, tableSorting });
    }, [tableData, tableSorting]);

    return (
        <TableStateContext.Provider
            value={{
                tableData: aggrTableData,
                tableSorting,
                setSorting: handleSetSorting,
            }}
        >
            {children}
        </TableStateContext.Provider>
    );
};

export { TableStateContext, TableStateProvider, EColumnSorting };
