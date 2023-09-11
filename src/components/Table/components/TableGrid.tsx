import React, { ReactNode, useContext } from 'react';

import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import TableGridSC from '@/components/Table/styles/TableGrid.styles';

const TableGrid = ({ children }: { children: ReactNode }) => {
    const { fullColumnConfigList } = useContext(TableSettingsContext);

    return (
        <TableGridSC className="table-grid-sc" columnConfigList={fullColumnConfigList}>
            {children}
        </TableGridSC>
    );
};

export default TableGrid;
