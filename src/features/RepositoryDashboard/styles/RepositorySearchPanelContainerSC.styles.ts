import styled from '@emotion/styled';

const RepositorySearchPanelContainerSC = styled.div`
    display: flex;
    flex-direction: column;

    border: 2px solid ${(props) => props.theme.colors.borderGray};
    border-radius: 15px;

    //box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    //filter: blur(10px);

    :after {
        //box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        //filter: blur(10px);
        background-color: green;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        filter: blur(10px);
    }

    table {
        border-top: 2px solid ${(props) => props.theme.colors.borderGray};
    }

    aside {
        display: flex;
        justify-content: space-between;
        margin: 0 1.5rem;

        .search-panel {
            display: flex;
            gap: 1.5rem;
            justify-content: end;
            margin: 1rem;
        }
    }
`;

export default RepositorySearchPanelContainerSC;
