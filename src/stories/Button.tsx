import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import './button.css';

interface ButtonProps {
    // Is this the principal call to action on the page?
    primary?: boolean;
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const getVariantStyles = ({ primary = false }) =>
    primary
        ? css`
              color: white;
              background-color: #1ea7fd;
          `
        : css`
              color: #333;
              background-color: transparent;
              box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          `;

const getSizeStyles = ({ size = 'medium' }) => {
    switch (size) {
        case 'small': {
            return css`
                font-size: 12px;
                padding: 10px 16px;
            `;
        }
        case 'large': {
            return css`
                font-size: 16px;
                padding: 12px 24px;
            `;
        }
        default: {
            return css`
                font-size: 14px;
                padding: 11px 20px;
            `;
        }
    }
};

/**
 * Primary UI component for user interaction
 */
const ButtonSC = styled.button<Omit<ButtonProps, 'label'>>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;

    border: 0;
    border-radius: 3em;

    cursor: pointer;
    display: inline-block;
    line-height: 1;

    ${(props) => getVariantStyles(props)}
    ${(props) => getSizeStyles(props)}
    
    ${({ backgroundColor }) =>
        backgroundColor &&
        css`
            background-color: ${backgroundColor};
        `}
`;

const Button = ({ label, ...rest }: ButtonProps) => <ButtonSC {...rest}>{label}</ButtonSC>;

export default Button;
