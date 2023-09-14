import React, { useMemo } from 'react';

import TableColumnHeaderLabel from '@/components/Table/components/TableHead/components/TableColumnHeaderLabel';
import TableColumnHeaderSC from '@/components/Table/components/TableHead/styles/TableColumnHeader.styles';
import SortableHeaderContainer from '@/components/Table/components/TableHead/components/SortableHeaderContainer';
import { ITableColumnConfig } from '@/components/Table/models/config.models';

const TableColumnHeader = ({ columnConfig }: { columnConfig: ITableColumnConfig }) => {
    const { columnId, dataAccessor, isSortable } = useMemo(
        () => columnConfig,
        [columnConfig.columnId, columnConfig.dataAccessor, columnConfig.isSortable]
    );

    return (
        <TableColumnHeaderSC
            key={columnId}
            className="table-column-header-sc"
            columnConfig={columnConfig}
        >
            {isSortable ? (
                <SortableHeaderContainer columnId={columnId} dataAccessor={dataAccessor}>
                    <TableColumnHeaderLabel label={columnConfig.label} />
                </SortableHeaderContainer>
            ) : (
                <TableColumnHeaderLabel label={columnConfig.label} />
            )}
        </TableColumnHeaderSC>
    );
};

export default TableColumnHeader;
