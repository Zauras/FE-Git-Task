import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

import { columnWidthBySizeType } from '@/components/Table/utils/defaultColumnSizes';
import { ITableColumnConfig } from '@/components/Table/models/config.models';
import { EColumnSize } from '@/components/Table/models/column.models';

const getGridTemplate = ({
    fullColumnConfigList,
}: {
    fullColumnConfigList: ITableColumnConfig[];
}): SerializedStyles => {
    const gridTemplateColumn = fullColumnConfigList.reduce((acc, columnConfig) => {
        const { size = EColumnSize.Mid } = columnConfig.columnStyleConfig || {};
        const columnWidth = columnWidthBySizeType[size];

        return `${acc} ${columnWidth}`;
    }, '');

    return css`
        grid-template-columns: ${gridTemplateColumn};
    `;
};

const TableContainerSC = styled.div<{ fullColumnConfigList: ITableColumnConfig[] }>`
    overflow: hidden;
    border-radius: 1rem;
    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;

    table {
        border-spacing: 0;
        border-collapse: collapse;
    }

    thead,
    tbody,
    tr {
        display: grid;
        gap: 1.25rem;
        ${(props) => getGridTemplate(props)}
    }

    th,
    td {
        padding: 1rem 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    tr {
        padding: 0 0.75rem;
    }

    thead {
        display: block;
        border-right: 2px solid ${({ theme }) => theme.colors.accentPrimarySolid};
        border-left: 2px solid ${({ theme }) => theme.colors.accentPrimarySolid};
        background-color: ${({ theme }) => theme.colors.accentPrimarySolid};

        th:last-child {
            border: 0;
        }
    }

    tbody {
        display: block;
        border-right: 2px solid ${({ theme }) => theme.colors.border};
        border-left: 2px solid ${({ theme }) => theme.colors.border};

        tr:nth-of-type(even) {
            background: ${({ theme }) => theme.colors.backgroundDim};
        }
    }

    tfoot {
        display: block;
        height: 2rem;
        width: 100%;

        background-color: ${({ theme }) => theme.colors.accentPrimarySolid};
        color: ${({ theme }) => theme.colors.textInvert};
    }

    .empty-table-content {
        min-height: 10rem;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 600;
    }
`;

export default TableContainerSC;
