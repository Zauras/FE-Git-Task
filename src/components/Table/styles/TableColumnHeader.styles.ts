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

    font-weight: 600;
    font-size: 1.1rem;

    background-color: ${({ theme }) => theme.colors.accentPrimarySolid};
    color: ${({ theme }) => theme.colors.textInvert};
`;

export default TableColumnHeaderSC;
