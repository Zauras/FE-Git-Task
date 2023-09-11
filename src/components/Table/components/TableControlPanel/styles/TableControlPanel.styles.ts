import styled from '@emotion/styled';

const TableControlPanelSC = styled.aside`
    background-color: ${({ theme }) => theme.colors.accentPrimarySolid};
    color: ${({ theme }) => theme.colors.textInvert};

    padding: 0.75rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    display: flex;
    justify-content: space-between;

    .table-search-control {
        display: flex;
        gap: 1rem;
    }

    .table-sorting-control {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
    }

    .table-settings-control {
        display: flex;
        gap: 1rem;
    }
`;

export default TableControlPanelSC;
