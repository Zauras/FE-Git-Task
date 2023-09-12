import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getColumnAlignByDataType } from '@/components/Table/utils/defaultColumnAlign';
import { ITableColumnConfig } from '@/components/Table/models/config.models';

const getCellContentAlign = (columnConfig: ITableColumnConfig): SerializedStyles => {
    const { columnDataType, customStylingDto } = columnConfig;
    const { align } = customStylingDto || {};

    const alignment = align || getColumnAlignByDataType(columnDataType);

    return css`
        text-align: ${alignment};
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
