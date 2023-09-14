import { TTableData } from '@/components/Table/models/data.models';

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

export { getFilteredTableData };
