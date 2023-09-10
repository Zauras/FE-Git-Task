import { useCallback, useState } from 'react';

import Button from '@/components/Button/CommonButton/Button';
import TableSettingsControlModal from '@/components/Table/components/TableControlPanel/components/TableSettingsControlModal';

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

export default TableSettingsControl;
