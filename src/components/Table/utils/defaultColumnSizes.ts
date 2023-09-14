import { EColumnSize } from '@/components/Table/models/column.models';

const columnWidthBySizeType: Record<EColumnSize, string> = {
    [EColumnSize.Xs]: 'minmax(3.5rem, 0.5fr)',
    [EColumnSize.Sm]: 'minmax(4rem, 1fr)',
    [EColumnSize.Mid]: 'minmax(4.5rem, 1.25fr)',
    [EColumnSize.Lg]: 'minmax(5rem, 1.5fr)',
    [EColumnSize.Xl]: 'minmax(5.5rem, 2fr)',
};

export { columnWidthBySizeType };
