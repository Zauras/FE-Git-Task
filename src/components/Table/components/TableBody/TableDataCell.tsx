import React, { useContext, useMemo } from 'react';

import { ITableColumnConfig } from '@/components/Table/Table.models';
import TableDataCellSC from '@/components/Table/components/TableBody/styles/TableDataCell.styles';
import { TableStateContext } from '@/components/Table/state/TableState/TableStateContext';

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
    dataField: any;
    columnConfig: ITableColumnConfig;
}) => {
    const { tableSearchValue } = useContext(TableStateContext);

    const valueHtmlWithHighlights = useMemo(
        () => getHighlightedText(String(dataField), tableSearchValue),
        [dataField, tableSearchValue]
    );

    return <TableDataCellSC columnConfig={columnConfig}>{valueHtmlWithHighlights}</TableDataCellSC>;
};

export default TableDataCell;
