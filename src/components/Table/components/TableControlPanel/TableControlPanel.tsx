import TableControlPanelSC from '@/components/Table/components/TableControlPanel/TableControlPanel.styles';
import SwitchCheckbox from '@/components/Input/Checkbox/Switch/SwitchCheckbox';
import Button from '@/components/Button/CommonButton/Button';
import { EButtonSize } from '@/components/Button/Button.models';
import { ECheckboxSize } from '@/components/Input/Checkbox/Checkbox.models';
import Input from '@/components/Input/TextInput/Input';

const TableControlPanel = () => {
    return (
        <TableControlPanelSC>
            <div className="table-search-control">
                <Input placeholder="Search" />
                <Button size={EButtonSize.Small}>Search</Button>
            </div>

            <div className="table-sorting-control">
                <SwitchCheckbox label="Multiselect" size={ECheckboxSize.Small} isChecked={true} />
                <Button size={EButtonSize.Small}>Reset sorting</Button>
            </div>
        </TableControlPanelSC>
    );
};

export default TableControlPanel;
