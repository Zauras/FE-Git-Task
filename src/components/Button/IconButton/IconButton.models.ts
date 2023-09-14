import { ButtonHTMLAttributes } from 'react';
import { EButtonSize } from '@/components/Button/Button.models';

enum EButtonIconType {
    Close = 'close',
}

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconType?: EButtonIconType;
    size?: EButtonSize;
}

export type { IIconButtonProps };
export { EButtonIconType };
