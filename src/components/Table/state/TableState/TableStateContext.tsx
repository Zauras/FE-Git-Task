import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

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
    tableSearchValue: string;
    tableSorting: Record<TColumnId, IColumnSortState>;
    setSorting: (columnSortDto: IColumnSortDto) => void;
    resetSorting: () => void;
    setTableSearchValue: (keyword: string) => void;
}>({
    tableData: [],
    tableSorting: {},
    tableSearchValue: '',
    setSorting: (columnSortDto) => null,
    resetSorting: () => null,
    setTableSearchValue: (keyword: string) => null,
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

const getFilteredTableData = ({
    tableData,
    filterKeyword,
}: {
    tableData: TTableData;
    filterKeyword: string;
}): TTableData => {
    const lowerCaseFilterString = filterKeyword.toLowerCase();

    return tableData.filter((rowDto) => {
        for (const dataValue of Object.values(rowDto)) {
            if (String(dataValue).toLowerCase().includes(lowerCaseFilterString)) {
                return true;
            }
        }
        return false;
    });
};

const getSortedTableData = ({
    tableData,
    tableSorting,
}: {
    tableData: TTableData;
    tableSorting: TTableSorting;
}): TTableData => {
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
    const { columnConfigList, isMultiSortEnabled } = useContext(TableSettingsContext);

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

    const [aggrTableData, setAggrTableData] = useState(tableData);

    const [tableSearchStr, setTableSearchStr] = useState<string>('');

    useEffect(() => {
        const sortedData = getSortedTableData({ tableData, tableSorting });
        setAggrTableData(sortedData);
    }, [tableSorting]);

    useEffect(() => {
        const sortedData = getFilteredTableData({ tableData, filterKeyword: tableSearchStr });
        setAggrTableData(sortedData);
    }, [tableSearchStr]);

    const resetSortingToDefault = useCallback(() => {
        setTableSorting(defaultTableSorting);
    }, [defaultTableSorting]);

    return (
        <TableStateContext.Provider
            value={{
                tableData: aggrTableData,
                tableSorting,
                setSorting: handleSetSorting,
                resetSorting: resetSortingToDefault,
                tableSearchValue: tableSearchStr,
                setTableSearchValue: setTableSearchStr,
            }}
        >
            {children}
        </TableStateContext.Provider>
    );
};

export { TableStateContext, TableStateProvider, EColumnSorting };
