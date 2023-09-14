import SwitchCheckboxSC from '@/components/Input/Checkbox/Switch/SwitchCheckbox.styles';
import { ECheckboxSize } from '@/components/Input/Checkbox/Checkbox.models';
import { InputHTMLAttributes, SyntheticEvent } from 'react';

const SwitchCheckbox = ({
    isChecked,
    onChange,
    size,
    label = '',
    ...restProps
}: InputHTMLAttributes<HTMLInputElement> & {
    isChecked: boolean;
    onChange?: (e: SyntheticEvent) => void;
    label?: string;
    size?: ECheckboxSize;
}) => {
    return (
        <SwitchCheckboxSC size={size || ECheckboxSize.Medium}>
            <span className="checkbox-label">{label}</span>

            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={onChange} {...restProps} />
                <span className="slider"></span>
                <span className="labels" data-on="ON" data-off="OFF"></span>
            </label>
        </SwitchCheckboxSC>
    );
};

export default SwitchCheckbox;
