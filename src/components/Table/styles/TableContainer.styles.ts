import styled from '@emotion/styled';

const TableContainerSC = styled.div`
    border-collapse: collapse;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 1rem;
    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;

    overflow: hidden;
`;

export default TableContainerSC;
