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
        //grid-template-rows: repeat(auto-fill, 4rem);
    `;
};

const TableGridSC = styled.div<{ columnConfigList: ITableColumnConfig[] }>`
    display: grid;
    ${(props) => getGridTemplate(props)}
`;

export default TableGridSC;
