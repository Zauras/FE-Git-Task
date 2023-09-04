import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { ITableColumnConfig } from '@/components/Table/Table.models';
import { getColumnSizeByDataType } from '@/components/Table/settings/defaultColumnSizes';

const getCellContentAlign = (columnConfig: ITableColumnConfig): SerializedStyles => {
    const { columnDataType, customStylingDto } = columnConfig;
    const { align } = customStylingDto || {};

    const alignment = align || getColumnSizeByDataType(columnDataType);

    return css`
        text-align: ${alignment};
    `;
};

const TableDataCellSC = styled.td<{ columnConfig: ITableColumnConfig }>`
    ${({ columnConfig }) => getCellContentAlign(columnConfig)}
`;

export default TableDataCellSC;
