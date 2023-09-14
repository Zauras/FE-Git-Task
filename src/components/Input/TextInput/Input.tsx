import { ChangeEvent } from 'react';

import TextInputSC from '@/components/Input/TextInput/TextInput.styles';

const Input = ({
    value,
    placeholder,
    onChange,
}: {
    value?: string | undefined;
    placeholder?: string | undefined;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return <TextInputSC value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
