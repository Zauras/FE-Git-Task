import { ChangeEvent, useContext } from 'react';

import Input from '@/components/Input/TextInput/Input';
import { TableSearchContext } from '@/components/Table/state/TableSearch/TableSearchContext';
import { TableLoadingContext } from '@/components/Table/state/TableLoading/TableLoadingContext';

const TableSearchControl = () => {
    const { tableSearchValue, setTableSearchValue } = useContext(TableSearchContext);
    const { isLoading } = useContext(TableLoadingContext);

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTableSearchValue(event.target.value);
    };

    return (
        <div className="table-search-control">
            <Input
                disabled={isLoading}
                placeholder="Search"
                value={tableSearchValue}
                onChange={handleSearchInputChange}
            />
        </div>
    );
};

export default TableSearchControl;
