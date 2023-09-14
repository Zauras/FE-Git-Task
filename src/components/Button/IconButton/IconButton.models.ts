import { EButtonSize } from '@/components/Button/Button.models';

enum EButtonIconType {
    Close = 'close',
}

interface IIconButtonProps {
    iconType?: EButtonIconType;
    size?: EButtonSize;
}

export type { IIconButtonProps };
export { EButtonIconType };
