import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

import { ITableColumnConfig } from '@/components/Table/Table.models';
import { getColumnSizeByDataType } from '@/components/Table/settings/defaultColumnSizes';

const getGridTemplate = ({
    columnConfigList,
}: {
    columnConfigList: ITableColumnConfig[];
}): SerializedStyles => {
    const gridTemplateColumn = columnConfigList.reduce((acc, columnConfig) => {
        const { columnDataType } = columnConfig;
        const columnWidth = getColumnSizeByDataType(columnDataType);

        return `${acc} ${columnWidth}`;
    }, '');

    return css`
        grid-template-columns: ${gridTemplateColumn};
        grid-template-rows: repeat(auto-fill, 4rem);
    `;
};

const TableSC = styled.table<{ columnConfigList: ITableColumnConfig[] }>`
    display: grid;
    border-collapse: collapse;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 1rem;
    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;

    overflow: hidden;

    ${(props) => getGridTemplate(props)}

    thead,
    tbody,
    tr {
        display: contents;
    }

    th,
    td {
        padding: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    th:last-child {
        border: 0;
    }

    tr:nth-child(even) td {
        background: ${({ theme }) => theme.colors.backgroundDim};
    }
`;

export default TableSC;
