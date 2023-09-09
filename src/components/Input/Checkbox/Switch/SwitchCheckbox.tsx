import SwitchCheckboxSC from '@/components/Input/Checkbox/Switch/SwitchCheckbox.styles';
import { ECheckboxSize } from '@/components/Input/Checkbox/Checkbox.models';

const SwitchCheckbox = ({
    isChecked,
    label = '',
    size = ECheckboxSize.Medium,
}: {
    isChecked: boolean;
    label?: string;
    size?: ECheckboxSize;
}) => {
    return (
        <SwitchCheckboxSC size={size}>
            <span className="checkbox-label">{label}</span>

            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
                <span className="labels" data-on="ON" data-off="OFF"></span>
            </label>
        </SwitchCheckboxSC>
    );
};

export default SwitchCheckbox;
