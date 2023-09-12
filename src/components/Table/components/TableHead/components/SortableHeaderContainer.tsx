import React, { ReactNode, useContext, useMemo } from 'react';

import { TableSortingContext } from '@/components/Table/state/TableSorting/TableSortingContext';
import { DownSvg, UpAndDownSvg, UpSvg } from '@/components/Table/icons';
import { EColumnSorting } from '@/components/Table/models/sorting.models';
import { TDataFieldAccessor } from '@/components/Table/models/data.models';

const SortableHeaderContainer = ({
    columnId,
    dataAccessor,
    children,
}: {
    columnId: string;
    dataAccessor: TDataFieldAccessor;
    children: ReactNode;
}) => {
    const { tableSorting, setSorting } = useContext(TableSortingContext);
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
        <div className="sortable-header-container">
            {children}
            {sortIndicator}
            <button className="sort-btn" onClick={handleToggleSort}></button>
        </div>
    );
};

export default SortableHeaderContainer;
