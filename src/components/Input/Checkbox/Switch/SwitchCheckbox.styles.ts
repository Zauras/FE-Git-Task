import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { ECheckboxSize } from '@/components/Input/Checkbox/Checkbox.models';

const getSizeStyling = (size: ECheckboxSize, theme: Theme) => {
    switch (size) {
        case ECheckboxSize.Small: {
            return css`
                --input-label-font-size: ${theme.fontSize.md};
                --switch-width: 3.125rem;
                --switch-state-label-font-size: ${theme.fontSize.xs};
            `;
        }
        case ECheckboxSize.Large: {
            return css`
                --input-label-font-size: ${theme.fontSize.xl};
                --switch-state-label-font-size: ${theme.fontSize.md};
            `;
        }
        case ECheckboxSize.Medium:
        default: {
            return css`
                --input-label-font-size: ${theme.fontSize.lg};
                --switch-width: 3.75rem;
                --switch-state-label-font-size: ${theme.fontSize.sm};
            `;
        }
    }
};

const sliderLabelTransitionCSS = css`
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
`;

const SwitchCheckboxSC = styled.div<{ size: ECheckboxSize }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;

    ${({ size, theme }) => getSizeStyling(size, theme)}

    .checkbox-label {
        font-weight: 600;
        font-size: var(--input-label-font-size);
    }

    .switch {
        --switch-height: calc(var(--switch-width) / 2.5);

        position: relative;
        display: inline-block;
        width: var(--switch-width);
        height: var(--switch-height);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
        border-radius: var(--switch-height);
        cursor: pointer;

        input {
            display: none;
        }

        .slider {
            position: absolute;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;

            border-radius: calc(var(--switch-height) * 0.85);
            background-color: ${({ theme }) => theme.colors.backgroundDisabled};
            transition: all 0.4s ease-in-out;

            :before {
                content: '';
                position: absolute;
                width: calc(var(--switch-height) * 0.85);
                height: calc(var(--switch-height) * 0.85);
                left: calc(var(--switch-height) * 0.1);

                border-radius: calc(var(--switch-height) * 0.5);
                background-color: ${({ theme }) => theme.colors.textInvert};
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
                transition: all 0.3s;
            }
        }

        input:checked + .slider {
            background-color: ${({ theme }) => theme.colors.primary};

            :before {
                transform: translateX(calc(var(--switch-width) - (var(--switch-height) * 1.05)));
            }
        }

        .labels {
            position: absolute;
            display: flex;
            align-items: center;

            left: 0;
            width: 100%;
            height: 100%;
            font-size: calc(var(--switch-state-label-font-size));
            font-weight: 600;

            :after {
                content: attr(data-off);
                position: absolute;
                right: calc(var(--switch-width) * 0.12);
                color: ${({ theme }) => theme.colors.textMain};
                opacity: 1;
                ${sliderLabelTransitionCSS};
            }

            :before {
                content: attr(data-on);
                position: absolute;
                left: calc(var(--switch-width) * 0.12);
                color: ${({ theme }) => theme.colors.textInvert};
                opacity: 0;
                ${sliderLabelTransitionCSS};
            }
        }

        input:checked ~ .labels::after {
            opacity: 0;
        }

        input:checked ~ .labels::before {
            opacity: 1;
        }
    }
`;

export default SwitchCheckboxSC;
