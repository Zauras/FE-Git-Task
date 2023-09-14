import { ReactNode } from 'react';

import { EButtonSize } from '../Button.models';

interface IButtonProps {
    children: string | ReactNode;
    isPrimary?: boolean;
    backgroundColor?: string;
    size?: EButtonSize | 'small' | 'large';
    onClick?: () => void;
}

export type { IButtonProps };
export { EButtonSize };
