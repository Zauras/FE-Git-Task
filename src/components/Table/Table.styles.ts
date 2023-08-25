import styled from '@emotion/styled';

const TableSC = styled.table<{ columnCount: number; isItemsClickable?: boolean }>`
    min-width: 100%;
    overflow-y: auto;

    thead {
        font-weight: 700;
        tr {
            font-weight: 600;
            border-bottom: 2px solid ${(props) => props.theme.colors.borderGray};
        }
    }

    tbody {
        display: grid;
        grid-gap: 0.5rem 0;
        padding-top: 0.5rem;

        tr {
            cursor: ${({ isItemsClickable }) => (isItemsClickable ? 'pointer' : '')};
        }

        tr:last-child {
            border-bottom: none;
        }

        .no-table-content-container {
            font-weight: 600;
            margin: 3rem auto;
        }
    }

    tr {
        display: grid;
        grid-template-columns: minmax(12rem, 1fr) repeat(
                ${(props) => props.columnCount - 1},
                8.5rem
            );
        grid-gap: 0 1rem;

        padding: 1.5rem;
        border-bottom: 1px solid ${(props) => props.theme.colors.borderGray};
    }

    td {
        align-content: center;
        align-items: center;
    }

    thead,
    tr,
    .tfoot {
        @media (min-width: ${(props) => props.theme.bps.lg}) {
            padding: 1.5rem 3rem;
        }
    }
`;

export default TableSC;
