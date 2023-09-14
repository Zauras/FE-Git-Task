import { ITableConfigProps, ITableSettingsProps } from '@/components/Table/models/config.models';

interface ITableProps {
    tableConfig: ITableConfigProps;
    tableSettings: ITableSettingsProps;
    tableData: object[];
    isLoading?: boolean;
}

export type { ITableProps };
