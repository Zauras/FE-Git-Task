import { useCallback, useContext, useState } from 'react';

import TableControlPanelSC from '@/components/Table/components/TableControlPanel/TableControlPanel.styles';
import Button from '@/components/Button/CommonButton/Button';
import { EButtonSize } from '@/components/Button/Button.models';
import Input from '@/components/Input/TextInput/Input';
import { TableStateContext } from '@/components/Table/state/TableState/TableStateContext';
import { TableSettingsContext } from '@/components/Table/state/TableSettings/TableSettingsContext';
import Modal from '@/components/Modal/Modal';
import SwitchCheckbox from '@/components/Input/Checkbox/Switch/SwitchCheckbox';
import styled from '@emotion/styled';

const TableSettingsControlFormSC = styled.form`
    width: 30rem;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
`;

const TableSettingsControlModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const { isRowCountEnabled, isMultiSortEnabled, isSearchEnabled } =
        useContext(TableSettingsContext);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <TableSettingsControlFormSC>
                <label>Enable multi-sorting</label>
                <SwitchCheckbox isChecked={isMultiSortEnabled} />

                <label>Enable search</label>
                <SwitchCheckbox isChecked={isSearchEnabled} />

                <label>Enable multi-sorting</label>
                <SwitchCheckbox isChecked={isRowCountEnabled} />
            </TableSettingsControlFormSC>
        </Modal>
    );
};

const TableSettingsControl = () => {
    const [isTableSettingsOpen, setIsTableSettingsOpen] = useState(false);

    const toggleTableSettingsModal = useCallback(() => {
        setIsTableSettingsOpen(!isTableSettingsOpen);
    }, [isTableSettingsOpen]);

    return (
        <div className="table-settings-control">
            <Button onClick={toggleTableSettingsModal}>Settings</Button>
            <TableSettingsControlModal
                isOpen={isTableSettingsOpen}
                onClose={toggleTableSettingsModal}
            />
        </div>
    );
};

const TableControlPanel = () => {
    const { isMultiSortEnabled, isSearchEnabled, isTableSettingChangeable } =
        useContext(TableSettingsContext);
    const { resetSorting } = useContext(TableStateContext);

    return (
        <TableControlPanelSC>
            {isSearchEnabled && (
                <div className="table-search-control">
                    <Input placeholder="Search" />
                    <Button size={EButtonSize.Small}>Search</Button>
                </div>
            )}

            {isMultiSortEnabled && (
                <div className="table-sorting-control">
                    <Button size={EButtonSize.Small} onClick={resetSorting}>
                        Reset sorting
                    </Button>
                </div>
            )}

            {isTableSettingChangeable && <TableSettingsControl />}
        </TableControlPanelSC>
    );
};

export default TableControlPanel;