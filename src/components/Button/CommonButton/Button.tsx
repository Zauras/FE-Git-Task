import React from 'react';

import ButtonSC from '@/components/Button/CommonButton/Button.styles';
import { IButtonProps } from '@/components/Button/CommonButton/Button.models';

const Button = ({ children, ...restProps }: IButtonProps) => {

    return (
        <ButtonSC className="button-sc" {...restProps}>
            {children}
        </ButtonSC>
    );
};

export default Button;
