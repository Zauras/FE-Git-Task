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
        const { columnDataType, customStylingDto } = columnConfig;
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
    min-width: 100%;

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

    th {
        position: sticky;
        top: 0;
        background: #6c7ae0;
        text-align: left;
        font-weight: normal;
        font-size: 1.1rem;
        color: white;
    }

    th:last-child {
        border: 0;
    }

    td {
        padding-top: 10px;
        padding-bottom: 10px;
        color: #808080;
    }

    tr:nth-child(even) td {
        background: #f8f6ff;
    }
`;

export default TableSC;
