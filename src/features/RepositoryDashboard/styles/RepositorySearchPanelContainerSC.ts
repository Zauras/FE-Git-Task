import styled from '@emotion/styled';

const RepositorySearchPanelContainerSC = styled.div`
    display: flex;
    flex-direction: column;

    border: 2px solid ${(props) => props.theme.colors.borderGray};
    border-radius: 15px;

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

            input {
                border: 1px solid ${(props) => props.theme.colors.borderGray};
                border-radius: 5px;
                padding: 0.5rem 0.5rem;

                ::placeholder {
                    /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: ${(props) => props.theme.colors.lightTextGray};
                    opacity: 1; /* Firefox */
                }
            }

            button {
                background-color: ${(props) => props.theme.colors.primary};
                color: white;

                min-width: 5rem;
                border-radius: 5px;
                padding: 0.25rem 0.5rem;

                font-weight: 700;
            }
        }
    }
`;

export default RepositorySearchPanelContainerSC;
