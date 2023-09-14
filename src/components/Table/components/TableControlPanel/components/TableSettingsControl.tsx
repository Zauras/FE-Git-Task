import { useCallback, useContext, useState } from 'react';

import Button from '@/components/Button/CommonButton/Button';
import TableSettingsControlModal from '@/components/Table/components/TableControlPanel/components/TableSettingsControlModal';
import { EButtonSize } from '@/components/Button/Button.models';
import { TableLoadingContext } from '@/components/Table/state/TableLoading/TableLoadingContext';

const TableSettingsControl = () => {
    const { isLoading } = useContext(TableLoadingContext);

    const [isTableSettingsOpen, setIsTableSettingsOpen] = useState(false);

    const toggleTableSettingsModal = useCallback(() => {
        setIsTableSettingsOpen(!isTableSettingsOpen);
    }, [isTableSettingsOpen]);

    return (
        <div className="table-settings-control">
            <Button
                size={EButtonSize.Small}
                disabled={isLoading}
                onClick={toggleTableSettingsModal}
            >
                Settings
            </Button>

            <TableSettingsControlModal
                isOpen={isTableSettingsOpen}
                onClose={toggleTableSettingsModal}
            />
        </div>
    );
};

export default TableSettingsControl;
