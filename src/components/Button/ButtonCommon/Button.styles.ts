import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { EButtonSize, IButtonProps } from '@/components/Button/ButtonCommon/Button.models';

const getVariantStyles = ({ theme, primary = false }: { theme: Theme; primary?: boolean }) =>
    primary
        ? css`
              color: ${theme.colors.textInvert};
              background-color: ${theme.colors.primary};
              border: 2px solid ${theme.colors.primary};
          `
        : css`
              color: ${theme.colors.textMain};
              background-color: ${theme.colors.secondary};
              border: 2px solid ${theme.colors.primary};
              box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          `;

const getSizeStyles = ({
    theme,
    size = EButtonSize.Medium,
}: {
    theme: Theme;
    size?: EButtonSize;
}) => {
    console.log('Button SC props::', theme.fontSize, size);

    switch (size) {
        case EButtonSize.Small: {
            return css`
                font-size: ${theme.fontSize.sm};
                padding: 10px 16px;
            `;
        }
        case EButtonSize.Large: {
            return css`
                font-size: ${theme.fontSize.lg};
                padding: 12px 24px;
            `;
        }
        case EButtonSize.Medium:
        default: {
            return css`
                font-size: ${theme.fontSize.md};
                padding: 11px 20px;
            `;
        }
    }
};

const ButtonSC = styled.button<IButtonProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;

    border-radius: 0.5em;

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

export default ButtonSC;
