import React from 'react';

import ButtonSC from '@/components/Button/ButtonCommon/Button.styles';
import { IButtonProps } from '@/components/Button/ButtonCommon/Button.models';

const Button = ({ children, ...restProps }: IButtonProps) => {
    console.log('Button props:', restProps);

    return (
        <ButtonSC className="button-sc" {...restProps}>
            {children}
        </ButtonSC>
    );
};

export default Button;
