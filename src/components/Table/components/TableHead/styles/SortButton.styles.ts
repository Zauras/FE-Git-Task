import styled from '@emotion/styled';

import { EColumnSorting } from '@/components/Table/state/TableState/TableStateContext';

const SortButtonSC = styled.button<{ sorting: EColumnSorting | null }>`
    background-color: transparent;
    border: none;
`;

export default SortButtonSC;
