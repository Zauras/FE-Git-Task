import { useContext } from 'react';

import TableControlPanelSC from '@/components/Table/components/TableControlPanel/styles/TableControlPanel.styles';
import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import TableSearchControl from '@/components/Table/components/TableControlPanel/components/TableSearchControl';
import TableSettingsControl from '@/components/Table/components/TableControlPanel/components/TableSettingsControl';
import TableSortControl from '@/components/Table/components/TableControlPanel/components/TableSortControl';

const TableControlPanel = () => {
    const { isMultiSortEnabled, isSearchEnabled, isTableSettingChangeable } =
        useContext(TableSettingsContext);

    return (
        <TableControlPanelSC>
            {isSearchEnabled && <TableSearchControl />}
            {isMultiSortEnabled && <TableSortControl />}
            {isTableSettingChangeable && <TableSettingsControl />}
        </TableControlPanelSC>
    );
};

export default TableControlPanel;
