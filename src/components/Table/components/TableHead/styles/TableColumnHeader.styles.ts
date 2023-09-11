import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { EColumnAlign, ITableColumnConfig } from '@/components/Table/Table.models';
import { getColumnAlignByDataType } from '@/components/Table/settings/defaultColumnAlign';

const getFlexJustifyByTextAlign = (textAlign: string): string => {
    switch (textAlign) {
        case EColumnAlign.Right:
            return 'flex-end';

        case EColumnAlign.Center:
            return 'center';

        case EColumnAlign.Left:
        default:
            return 'flex-start';
    }
};

const getCellContentJustify = (columnConfig: ITableColumnConfig): SerializedStyles => {
    const { columnDataType, customStylingDto } = columnConfig;
    const { align } = customStylingDto || {};
    const textAlign = align || getColumnAlignByDataType(columnDataType);

    return css`
        justify-content: ${getFlexJustifyByTextAlign(textAlign)};
    `;
};

const TableColumnHeaderSC = styled.th<{ columnConfig: ITableColumnConfig }>`
    display: flex;
    align-items: center;
    ${({ columnConfig }) => getCellContentJustify(columnConfig)}

    position: sticky;
    top: 0;

    background-color: ${({ theme }) => theme.colors.accentPrimarySolid};

    .table-header-label {
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.lg};
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
