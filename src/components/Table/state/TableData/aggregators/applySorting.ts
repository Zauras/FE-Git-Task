import { EColumnSorting, TTableSorting } from '@/components/Table/models/sorting.models';
import { TTableData } from '@/components/Table/models/data.models';

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

export { getSortedTableData };
