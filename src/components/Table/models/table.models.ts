import { ITableConfigProps, ITableSettingsProps } from '@/components/Table/models/config.models';

interface ITableProps {
    tableConfig: ITableConfigProps;
    tableSettings: ITableSettingsProps;
    tableData: object[];
}

export type { ITableProps };
