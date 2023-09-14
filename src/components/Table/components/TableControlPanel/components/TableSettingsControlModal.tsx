import { useContext } from 'react';

import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import Modal from '@/components/Modal/Modal';
import TableSettingsControlFormSC from '@/components/Table/components/TableControlPanel/styles/TableSettingsControlForm.styles';
import SwitchCheckbox from '@/components/Input/Checkbox/Switch/SwitchCheckbox';
import Button from '@/components/Button/CommonButton/Button';

const TableSettingsControlModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const {
        isSearchEnabled,
        isMultiSortEnabled,
        isRowCountEnabled,
        toggleIsRowCountEnabled,
        toggleIsMultiSortEnabled,
        toggleIsSearchEnabled,
        resetAllSettings,
    } = useContext(TableSettingsContext);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <TableSettingsControlFormSC>
                <label>Enable search</label>
                <SwitchCheckbox isChecked={isSearchEnabled} onChange={toggleIsSearchEnabled} />

                <label>Enable row counting</label>
                <SwitchCheckbox isChecked={isRowCountEnabled} onChange={toggleIsRowCountEnabled} />

                <label>Enable multi-sorting</label>
                <SwitchCheckbox
                    isChecked={isMultiSortEnabled}
                    onChange={toggleIsMultiSortEnabled}
                />

                <Button onClick={resetAllSettings}>Reset to default settings</Button>
            </TableSettingsControlFormSC>
        </Modal>
    );
};

export default TableSettingsControlModal;
