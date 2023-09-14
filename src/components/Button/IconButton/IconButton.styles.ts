import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { EButtonSize } from '@/components/Button/CommonButton/Button.models';
import { IIconButtonProps } from '@/components/Button/IconButton/IconButton.models';

const getVariantStyles = ({ theme }: { theme: Theme; isPrimary?: boolean }) => {
    const {
        colors: { textInvert, primary, primaryHover },
    } = theme;

    return css`
        color: ${textInvert};
        background-color: ${primary};
        border: 1px solid ${primary};

        :hover {
            background-color: ${primaryHover};
            box-shadow: ${primary} 0px 0px 3px 1px inset;
        }
    `;
};

const getSizeStyles = ({
    theme,
    size = EButtonSize.Medium,
}: {
    theme: Theme;
    size?: EButtonSize;
}) => {
    switch (size) {
        case EButtonSize.Small: {
            return css`
                width: 1.5rem;
                height: 1.5rem;
                font-size: ${theme.fontSize.sm};
            `;
        }
        case EButtonSize.Large: {
            return css`
                width: 2.5rem;
                height: 2.5rem;
                font-size: ${theme.fontSize.lg};
            `;
        }
        case EButtonSize.Medium:
        default: {
            return css`
                width: 2rem;
                height: 2rem;
                font-size: ${theme.fontSize.md};
            `;
        }
    }
};

const IconButtonSC = styled.button<IIconButtonProps>`
    text-align: center;
    vertical-align: middle;

    border-radius: 100px;
    font-weight: 700;
    cursor: pointer;

    ${(props) => getVariantStyles(props)}
    ${(props) => getSizeStyles(props)}
`;

export default IconButtonSC;
