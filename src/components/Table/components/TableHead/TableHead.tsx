import React, { ReactNode, useContext, useMemo } from 'react';

import TableColumnHeaderSC from '@/components/Table/styles/TableColumnHeader.styles';
import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import {
    EColumnSorting,
    TableStateContext,
} from '@/components/Table/state/TableState/TableStateContext';
import { ITableColumnConfig, TDataFieldAccessor } from '@/components/Table/Table.models';
import SortButtonSC from '@/components/Table/components/TableHead/styles/SortButton.styles';

import { ReactComponent as UpSvg } from '@/components/Table/icons/up.svg';
import { ReactComponent as DownSvg } from '@/components/Table/icons/down.svg';
import { ReactComponent as UpAndDownSvg } from '@/components/Table/icons/up_and_down.svg';

const SortButton = ({
    columnId,
    dataAccessor,
    children,
}: {
    columnId: string;
    dataAccessor: TDataFieldAccessor;
    children: ReactNode;
}) => {
    const { tableSorting, setSorting } = useContext(TableStateContext);
    const columnSorting = tableSorting[columnId];
    const sorting = columnSorting?.sorting;

    const handleToggleSort = () => {
        if (!columnSorting?.sorting) {
            setSorting({ columnId, dataAccessor, sorting: EColumnSorting.Asc });
        } else if (columnSorting.sorting === EColumnSorting.Asc) {
            setSorting({ columnId, dataAccessor, sorting: EColumnSorting.Desc });
        } else {
            setSorting({ columnId, dataAccessor, sorting: null });
        }
    };

    const sortIndicator = useMemo(() => {
        switch (sorting) {
            case EColumnSorting.Asc:
                return <UpSvg className="sort-svg" />;
            case EColumnSorting.Desc:
                return <DownSvg className="sort-svg" />;
            default:
                return <UpAndDownSvg className="sort-svg" />;
        }
    }, [sorting]);

    return (
        <button className="sort-btn-wrapper" onClick={handleToggleSort}>
            {children}
            {sortIndicator}
        </button>
    );
};

const TableColumnHeaderLabel = ({ label }: { label: string }) => {
    return <div className="table-header-label">{label}</div>;
};

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
                <SortButton columnId={columnId} dataAccessor={dataAccessor}>
                    <TableColumnHeaderLabel label={columnConfig.label} />
                </SortButton>
            ) : (
                <TableColumnHeaderLabel label={columnConfig.label} />
            )}
        </TableColumnHeaderSC>
    );
};

const TableHead = () => {
    const { fullColumnConfigList } = useContext(TableSettingsContext);

    return (
        <thead>
            <tr>
                {fullColumnConfigList.map((columnConfig) => (
                    <TableColumnHeader key={columnConfig.columnId} columnConfig={columnConfig} />
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
