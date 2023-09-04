import React from 'react';

import PageLayoutSC from '@/components/PageLayout/PageLayoutSC.styles';
import Table from '@/components/Table/Table';
import { EColumnType, ITableColumnConfig } from '@/components/Table/Table.models';

const TablePage = () => {
    const columnConfigList: ITableColumnConfig[] = [
        { columnId: '0', label: 'Nr', dataField: 'nr', columnDataType: EColumnType.Nr },
        { columnId: '1', label: 'Product', dataField: 'product' },
        { columnId: '2', label: 'Weight', dataField: 'weight' },
        { columnId: '3', label: 'Price', dataField: 'price' },
        {
            columnId: '4',
            label: 'Exp. Date',
            dataField: 'expDate',
            columnDataType: EColumnType.DateTime,
        },
    ];

    const rowData = [
        { nr: 1, product: 'Potato', weight: 400, price: 56, expDate: '2023-09-03T05:10:56.878Z' },
        { nr: 2, product: 'Carrot', weight: 1513, price: 12, expDate: '2027-12-03T09:58:06.878Z' },
        { nr: 3, product: 'Tomato', weight: 324, price: 192, expDate: '2026-01-03T12:00:00.000' },
    ];

    return (
        <PageLayoutSC>
            <header className="page-header">
                <h1>Github Repository Search</h1>
            </header>

            <div className="page-content">
                <Table columnConfigList={columnConfigList} rowData={rowData} />
            </div>

            <footer className="page-footer" />
        </PageLayoutSC>
    );
};

export default TablePage;
