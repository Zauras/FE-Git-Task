import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { getSortedTableData } from '@/components/Table/state/TableData/aggregators/applySorting';
import { getFilteredTableData } from '@/components/Table/state/TableData/aggregators/applyFilters';
import { TableSortingContext } from '@/components/Table/state/TableSorting/TableSortingContext';
import { TableSearchContext } from '@/components/Table/state/TableSearch/TableSearchContext';
import { TableConfigContext } from '@/components/Table/state/TableConfig/TableConfigContext';
import { getDataFieldValue } from '@/components/Table/utils/dataAccess';
import { TTableData, TTableRowData } from '@/components/Table/models/data.models';
import { IColumnSortState } from '@/components/Table/models/sorting.models';

const TableDataContext = createContext<{ tableData: TTableData }>({ tableData: [] });

const TableDataProvider = ({
    initData = [],
    children,
}: {
    initData: object[];
    children: ReactNode;
}) => {
    const { columnConfigList } = useContext(TableConfigContext);
    const { tableSorting } = useContext(TableSortingContext);
    const { tableSearchValue } = useContext(TableSearchContext);

    const tableData = useMemo(
        () =>
            initData.map((rowDataObj) =>
                columnConfigList.reduce((acc, { columnId, dataAccessor }) => {
                    acc[columnId] = getDataFieldValue(dataAccessor, rowDataObj);
                    return acc;
                }, {} as TTableRowData)
            ) as TTableData,
        [initData]
    );

    const [aggrTableData, setAggrTableData] = useState<TTableData>(() => {
        return getSortedTableData({ tableData: tableData, tableSorting });
    });
    const prevFilterRef = useRef<string>(tableSearchValue);
    const prevSortingRef = useRef<Record<string, IColumnSortState>>(tableSorting);

    useEffect(() => {
        if (prevFilterRef.current === tableSearchValue) return;
        prevFilterRef.current = tableSearchValue;

        let data = getFilteredTableData({
            tableData: tableData,
            filterKeyword: tableSearchValue,
        });
        data = getSortedTableData({
            tableData: data,
            tableSorting,
        });

        setAggrTableData(data);
    }, [tableSearchValue]);

    useEffect(() => {
        if (prevSortingRef.current === tableSorting) return;
        prevSortingRef.current = tableSorting;

        const data = getSortedTableData({
            tableData: aggrTableData,
            tableSorting,
        });
        setAggrTableData(data);
    }, [tableSorting]);

    const ctxValue = useMemo(() => {
        return { tableData: aggrTableData };
    }, [aggrTableData]);

    return <TableDataContext.Provider value={ctxValue}>{children}</TableDataContext.Provider>;
};

export { TableDataProvider, TableDataContext };
