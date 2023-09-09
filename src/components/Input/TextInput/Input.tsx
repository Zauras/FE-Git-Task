import { SyntheticEvent } from 'react';

import TextInputSC from '@/components/Input/TextInput/TextInput.styles';

const Input = ({
    value,
    placeholder,
    onChange,
}: {
    value?: string | undefined;
    placeholder?: string | undefined;
    onChange?: (e: SyntheticEvent) => void;
}) => {
    return <TextInputSC value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
