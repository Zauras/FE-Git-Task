import { useMemo } from 'react';

import {
    EButtonIconType,
    IIconButtonProps,
} from '@/components/Button/IconButton/IconButton.models';
import IconButtonSC from '@/components/Button/IconButton/IconButton.styles';

const IconButton = (props: IIconButtonProps) => {
    const iconType = useMemo(() => props.iconType || EButtonIconType.Close, [props.iconType]);

    switch (iconType) {
        case EButtonIconType.Close:
        default:
            return <IconButtonSC {...props}>X</IconButtonSC>;
    }
};

export default IconButton;
