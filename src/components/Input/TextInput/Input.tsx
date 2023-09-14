import { ChangeEvent, InputHTMLAttributes } from 'react';

import TextInputSC from '@/components/Input/TextInput/TextInput.styles';

const Input = ({
    value,
    placeholder,
    onChange,
    ...restProps
}: InputHTMLAttributes<HTMLInputElement> & {
    value?: string | undefined;
    placeholder?: string | undefined;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <TextInputSC value={value} placeholder={placeholder} onChange={onChange} {...restProps} />
    );
};

export default Input;
