import React, { useContext, useMemo } from 'react';

import TableDataCellSC from '@/components/Table/components/TableBody/styles/TableDataCell.styles';
import { TableSearchContext } from '@/components/Table/state/TableSearch/TableSearchContext';
import { ITableColumnConfig } from '@/components/Table/models/config.models';

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
    dataField,
    columnConfig,
}: {
    dataField: object;
    columnConfig: ITableColumnConfig;
}) => {
    const { tableSearchValue } = useContext(TableSearchContext);

    const valueHtmlWithHighlights = useMemo(
        () => getHighlightedText(String(dataField), tableSearchValue),
        [dataField, tableSearchValue]
    );

    return <TableDataCellSC columnConfig={columnConfig}>{valueHtmlWithHighlights}</TableDataCellSC>;
};

export default TableDataCell;
