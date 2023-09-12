import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { TColumnId } from '@/components/Table/models/column.models';
import { getSortedTableData } from '@/components/Table/state/TableData/aggregators/applySorting';
import { getFilteredTableData } from '@/components/Table/state/TableData/aggregators/applyFilters';
import { TableSortingContext } from '@/components/Table/state/TableSorting/TableSortingContext';
import { TableSearchContext } from '@/components/Table/state/TableSearch/TableSearchContext';
import { TableConfigContext } from '@/components/Table/state/TableConfig/TableConfigContext';
import { getDataFieldValue } from '@/components/Table/utils/dataAccess';

const TableDataContext = createContext<{ tableData: object[] }>({ tableData: [] });

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

    const [tableData, setTableData] = useState(() =>
        initData.map((dataRow) =>
            columnConfigList.reduce(
                (acc, { columnId, dataAccessor }) => {
                    acc[columnId] = getDataFieldValue(dataAccessor, dataRow);
                    return acc;
                },
                {} as Record<TColumnId, number | string | null>
            )
        )
    );

    const [aggrTableData, setAggrTableData] = useState(tableData);

    useEffect(() => {
        const sortedData = getSortedTableData({ tableData, tableSorting });
        setAggrTableData(sortedData);
    }, [tableSorting]);

    useEffect(() => {
        const sortedData = getFilteredTableData({ tableData, filterKeyword: tableSearchValue });
        setAggrTableData(sortedData);
    }, [tableSearchValue]);

    return (
        <TableDataContext.Provider
            value={{
                tableData: aggrTableData,
            }}
        >
            {children}
        </TableDataContext.Provider>
    );
};

export { TableDataProvider, TableDataContext };
