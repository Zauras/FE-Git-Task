import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { ITableColumnConfig } from '@/components/Table/Table.models';
import { getColumnAlignByDataType } from '@/components/Table/settings/defaultColumnAlign';

const getCellContentAlign = (columnConfig: ITableColumnConfig): SerializedStyles => {
    const { columnDataType, customStylingDto } = columnConfig;
    const { align } = customStylingDto || {};

    const alignment = align || getColumnAlignByDataType(columnDataType);

    return css`
        text-align: ${alignment};
    `;
};

const TableColumnHeaderSC = styled.th<{ columnConfig: ITableColumnConfig }>`
    ${({ columnConfig }) => getCellContentAlign(columnConfig)}

    position: sticky;
    top: 0;

    background-color: ${({ theme }) => theme.colors.accentPrimarySolid};

    .table-header-label {
        font-weight: 600;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.textInvert};
    }

    .sort-btn-wrapper {
        display: flex;
        justify-items: center;
        align-items: center;
        gap: 0.5rem;

        border: none;
        background-color: inherit;

        cursor: pointer;

        .sort-svg {
            width: 1rem;
            height: 1rem;
            fill: ${({ theme }) => theme.colors.textInvert};
        }
    }
`;

export default TableColumnHeaderSC;
