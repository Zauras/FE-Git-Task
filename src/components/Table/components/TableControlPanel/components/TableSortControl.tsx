import { useContext } from 'react';

import Button from '@/components/Button/CommonButton/Button';
import { EButtonSize } from '@/components/Button/Button.models';
import { TableSortingContext } from '@/components/Table/state/TableSorting/TableSortingContext';

const TableSortControl = () => {
    const { resetSorting } = useContext(TableSortingContext);

    return (
        <div className="table-sorting-control">
            <Button size={EButtonSize.Small} onClick={resetSorting}>
                Reset sorting
            </Button>
        </div>
    );
};

export default TableSortControl;
