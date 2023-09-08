import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { getDataFieldValue } from '@/components/Table/utils';
import { TColumnId, TDataFieldAccessor, TTableData } from '@/components/Table/Table.models';
import { TableSettingsContext } from '@/components/Table/state/TableSettingsContext';

const TableStateContext = createContext<{
    tableData: any[];
    tableSorting: Record<TColumnId, TColumnSortState>;
    setSorting: (columnSortDto: TColumnSortDto) => void;
}>({
    tableData: [],
    tableSorting: {},
    setSorting: (columnSortDto) => null,
});

enum EColumnSorting {
    Asc = 'asc',
    Desc = ' desc',
}

type TTableSorting = Record<TColumnId, TColumnSortState>;

interface TColumnSortDto {
    columnId: string;
    dataAccessor: TDataFieldAccessor;
    sorting: EColumnSorting | null;
}

interface TColumnSortState extends TColumnSortDto {
    sortOrderIndex: number;
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
        aSort.sortOrderIndex > bSort.sortOrderIndex ? 1 : -1
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
    initSorting = [],
    children,
}: {
    initData: any[];
    initSorting?: TColumnSortDto[];
    children: ReactNode;
}) => {
    const { columnConfigList } = useContext(TableSettingsContext);

    const [tableSorting, setTableSorting] = useState<Record<TColumnId, TColumnSortState>>(() =>
        initSorting.reduce(
            (acc, columnSortDto, i) => {
                acc[columnSortDto.columnId] = { ...columnSortDto, sortOrderIndex: i };
                return acc;
            },
            {} as Record<string, TColumnSortState>
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
        // return getSortedTableData({
        //     tableData: initTableData,
        //     tableSorting,
        // });
    });

    const handleSetSorting = useCallback(
        (sortingDto: TColumnSortDto) => {
            const { columnId, dataAccessor, sorting } = sortingDto;

            if (!sorting) {
                const { [columnId]: _, ...newTableSorting } = tableSorting;
                setTableSorting(newTableSorting);
            } else {
                const sortOrderIndex = Object.keys(tableSorting).length;
                setTableSorting({
                    ...tableSorting,
                    [columnId]: { columnId, dataAccessor, sorting, sortOrderIndex },
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
