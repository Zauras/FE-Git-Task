import { useContext } from 'react';

import Button from '@/components/Button/CommonButton/Button';
import { EButtonSize } from '@/components/Button/Button.models';
import { TableStateContext } from '@/components/Table/state/TableState/TableStateContext';

const TableSortControl = () => {
    const { resetSorting } = useContext(TableStateContext);

    return (
        <div className="table-sorting-control">
            <Button size={EButtonSize.Small} onClick={resetSorting}>
                Reset sorting
            </Button>
        </div>
    );
};

export default TableSortControl;
