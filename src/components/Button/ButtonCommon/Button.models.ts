import { ReactNode } from 'react';

enum EButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

interface IButtonProps {
    children: string | ReactNode;
    primary?: boolean;
    backgroundColor?: string;
    size?: EButtonSize;
    onClick?: () => void;
}

export type { IButtonProps };
export { EButtonSize };
