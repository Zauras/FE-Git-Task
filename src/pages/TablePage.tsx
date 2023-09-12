import React from 'react';

import PageLayoutSC from '@/components/PageLayout/PageLayoutSC.styles';
import Table from '@/components/Table/Table';
import {
    ITableColumnConfig,
    ITableConfigProps,
    ITableSettingsProps,
} from '@/components/Table/models/config.models';
import { EColumnDataType } from '@/components/Table/models/column.models';
import { EColumnSorting } from '@/components/Table/models/sorting.models';

const testData = [
    {
        product: 'Heroes III: Might & Magic',
        price: 18,
        releaseDate: '1999-03-03T00:00:00.000Z',
        updated: '2023-09-03T05:10:56.878Z',
    },
    {
        product: 'Age of Empires II: Definitive Edition',
        price: 25,
        releaseDate: '2019-12-14T00:00:00.000Z',
        updated: '2023-09-03T05:10:56.878Z',
    },
    {
        product: 'Diablo II: Lord of Destruction',
        price: 35,
        releaseDate: '2001-06-27T00:00:00.000Z',
        updated: '2023-09-03T05:10:56.878Z',
    },
    {
        product: 'StarCraft',
        price: 12,
        releaseDate: '1998-03-31T00:00:00.000Z',
        updated: '2023-09-03T05:10:56.878Z',
    },
    {
        product: 'Grand Theft Auto V',
        price: 50,
        releaseDate: '2013-09-17T00:00:00.000Z',
        updated: '2023-09-03T05:10:56.878Z',
    },
];

const columnConfigList: ITableColumnConfig[] = [
    {
        columnId: 'game',
        label: 'Game',
        dataAccessor: 'product',
        columnDataType: EColumnDataType.String,
        isSortable: true,
    },
    {
        columnId: 'price',
        label: 'Price',
        dataAccessor: 'price',
        columnDataType: EColumnDataType.Number,
        isSortable: true,
    },
    {
        columnId: 'release_date',
        label: 'Release Date',
        dataAccessor: 'releaseDate',
        columnDataType: EColumnDataType.Date,
        isSortable: true,
    },
    {
        columnId: 'info_update',
        label: 'Info Update',
        dataAccessor: 'updated',
        columnDataType: EColumnDataType.DateTime,
        isSortable: true,
    },
];

const tableConfig: ITableConfigProps = {
    columnConfigList,
    defaultSorting: [{ columnId: 'price', sorting: EColumnSorting.Desc }],
};

const tableSettings: ITableSettingsProps = {
    isMultiSortEnabled: true,
    isRowCountEnabled: true,
    isSearchEnabled: true,
};

const TablePage = () => {
    return (
        <PageLayoutSC>
            <header className="page-header">
                <h1>Github Repository Search</h1>
            </header>

            <div className="page-content">
                <Table
                    tableSettings={tableSettings}
                    tableConfig={tableConfig}
                    tableData={testData}
                />
            </div>

            <footer className="page-footer" />
        </PageLayoutSC>
    );
};

export default TablePage;
