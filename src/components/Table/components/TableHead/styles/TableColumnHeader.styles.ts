import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getColumnAlignByDataType } from '@/components/Table/utils/defaultColumnAlign';
import { EColumnAlign } from '@/components/Table/models/column.models';
import { ITableColumnConfig } from '@/components/Table/models/config.models';

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
    background-color: ${({ theme }) => theme.colors.accentPrimarySolid};

    position: sticky;
    top: 0;

    .table-header-label {
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.lg};
        color: ${({ theme }) => theme.colors.textInvert};
    }

    .sortable-header-container {
        position: relative;

        .sort-svg {
            position: absolute;
            top: calc(50% - 0.5rem);
            left: 100%;
            width: 1rem;
            height: 1rem;
            margin-left: 0.25rem;
            fill: ${({ theme }) => theme.colors.textInvert};
        }

        .sort-btn {
            position: absolute;
            top: 0;
            left: 0;

            width: calc(100% + 1.5rem);
            min-height: 110%;
            padding: 0;
            border: none;
            background-color: inherit;

            cursor: pointer;
        }
    }
`;

export default TableColumnHeaderSC;
