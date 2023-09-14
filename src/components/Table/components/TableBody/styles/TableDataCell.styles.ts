import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { ITableColumnConfig } from '@/components/Table/models/config.models';
import { EColumnAlign } from '@/components/Table/models/column.models';

const getCellContentAlign = (columnConfig: ITableColumnConfig): SerializedStyles => {
    const { align = EColumnAlign.Center } = columnConfig.columnStyleConfig || {};

    return css`
        text-align: ${align};
    `;
};

const TableDataCellSC = styled.td<{ columnConfig: ITableColumnConfig }>`
    ${({ columnConfig }) => getCellContentAlign(columnConfig)}

    padding-top: 10px;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.colors.textMain};

    .search-value-in-text {
        background-color: ${({ theme }) => theme.colors.textBackgroundHighlight};
    }
`;

export default TableDataCellSC;
