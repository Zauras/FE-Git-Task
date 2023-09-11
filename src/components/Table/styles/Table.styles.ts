import styled from '@emotion/styled';

const TableSC = styled.table`
    overflow: hidden;

    border-spacing: 0;
    border-collapse: collapse;

    border-radius: 1rem;
    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;

    thead,
    tbody,
    tr {
        display: contents;
    }

    tbody {
        display: block;
        border-right: 2px solid ${({ theme }) => theme.colors.border};
        border-left: 2px solid ${({ theme }) => theme.colors.border};
    }

    th,
    td {
        padding: 1rem 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    th:last-child {
        border: 0;
    }

    tr:nth-of-type(even) td {
        background: ${({ theme }) => theme.colors.backgroundDim};
    }

    tfoot {
        display: block;
        height: 2rem;
        width: 100%;

        background-color: ${({ theme }) => theme.colors.accentPrimarySolid};
        color: ${({ theme }) => theme.colors.textInvert};
    }
`;

export default TableSC;
