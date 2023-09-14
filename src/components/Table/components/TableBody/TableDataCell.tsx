import React, { useContext, useMemo } from 'react';

import TableDataCellSC from '@/components/Table/components/TableBody/styles/TableDataCell.styles';
import { TableSearchContext } from '@/components/Table/state/TableSearch/TableSearchContext';
import { ITableColumnConfig } from '@/components/Table/models/config.models';
import { TCellData, TTableRowData } from '@/components/Table/models/data.models';

const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
        <span>
            {parts.map((part: string, i: number) => {
                const isHighlighted = part.toLowerCase() === highlight.toLowerCase();

                return (
                    <span key={i} className={`${isHighlighted && 'search-value-in-text'}`}>
                        {part}
                    </span>
                );
            })}
        </span>
    );
};

const TableDataCell = ({
    cellData,
    rowData,
    columnConfig,
}: {
    cellData: TCellData;
    rowData: TTableRowData;
    columnConfig: ITableColumnConfig;
}) => {
    const { tableSearchValue } = useContext(TableSearchContext);
    const renderFn = columnConfig.renderFn;

    const content = renderFn
        ? renderFn({ cellData, rowData, columnId: columnConfig.columnId })
        : cellData;

    const valueHtmlWithHighlights = useMemo(
        () => getHighlightedText(String(content), tableSearchValue),
        [content, tableSearchValue]
    );

    return <TableDataCellSC columnConfig={columnConfig}>{valueHtmlWithHighlights}</TableDataCellSC>;
};

export default TableDataCell;
