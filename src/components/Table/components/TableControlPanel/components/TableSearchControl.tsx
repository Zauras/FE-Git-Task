import { ChangeEvent, useContext } from 'react';

import { TableStateContext } from '@/components/Table/state/TableState/TableStateContext';
import Input from '@/components/Input/TextInput/Input';
import Button from '@/components/Button/CommonButton/Button';
import { EButtonSize } from '@/components/Button/Button.models';

const TableSearchControl = () => {
    const { tableSearchValue, setTableSearchValue } = useContext(TableStateContext);

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
            <Button size={EButtonSize.Small}>Search</Button>
        </div>
    );
};

export default TableSearchControl;
