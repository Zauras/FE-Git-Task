import { useContext } from 'react';

import Button from '@/components/Button/CommonButton/Button';
import { EButtonSize } from '@/components/Button/Button.models';
import { TableSortingContext } from '@/components/Table/state/TableSorting/TableSortingContext';
import { TableLoadingContext } from '@/components/Table/state/TableLoading/TableLoadingContext';

const TableSortControl = () => {
    const { resetSorting } = useContext(TableSortingContext);
    const { isLoading } = useContext(TableLoadingContext);

    return (
        <div className="table-sorting-control">
            <Button disabled={isLoading} size={EButtonSize.Small} onClick={resetSorting}>
                Reset sorting
            </Button>
        </div>
    );
};

export default TableSortControl;
