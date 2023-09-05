import React from 'react';

import PageLayoutSC from '@/components/PageLayout/PageLayoutSC.styles';
import Table from '@/components/Table/Table';
import { EColumnType, ITableColumnConfig } from '@/components/Table/Table.models';

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
    { columnId: '0', label: 'Nr', dataField: 'nr', columnDataType: EColumnType.Nr },
    { columnId: '1', label: 'Game', dataField: 'product', columnDataType: EColumnType.String },
    { columnId: '2', label: 'Price', dataField: 'price', columnDataType: EColumnType.Number },
    {
        columnId: '3',
        label: 'Release Date',
        dataField: 'releaseDate',
        columnDataType: EColumnType.Date,
    },
    {
        columnId: '4',
        label: 'Info Update',
        dataField: 'updated',
        columnDataType: EColumnType.DateTime,
    },
];

const TablePage = () => {
    return (
        <PageLayoutSC>
            <header className="page-header">
                <h1>Github Repository Search</h1>
            </header>

            <div className="page-content">
                <Table columnConfigList={columnConfigList} rowData={testData} />
            </div>

            <footer className="page-footer" />
        </PageLayoutSC>
    );
};

export default TablePage;
