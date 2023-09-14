import { ChangeEvent, useContext } from 'react';

import Input from '@/components/Input/TextInput/Input';
import { TableSearchContext } from '@/components/Table/state/TableSearch/TableSearchContext';

const TableSearchControl = () => {
    const { tableSearchValue, setTableSearchValue } = useContext(TableSearchContext);

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTableSearchValue(event.target.value);
    };

    return (
        <div className="table-search-control">
            <Input
                placeholder="Search"
                value={tableSearchValue}
                onChange={handleSearchInputChange}
            />
            {/*<Button size={EButtonSize.Small}>Search</Button>*/}
        </div>
    );
};

export default TableSearchControl;
