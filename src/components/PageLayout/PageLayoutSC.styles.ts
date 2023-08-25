import styled from '@emotion/styled';

const PageLayoutSC = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;

    color: ${(props) => props.theme.colors.textGray};
    background-color: ${(props) => props.theme.colors.white};

    .page-header {
        width: 100%;
        padding: 0.75rem 5rem;
        background-color: ${(props) => props.theme.colors.accentPrimary};
        color: ${(props) => props.theme.colors.white};
    }

    .page-content {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        align-items: center;

        height: 100%;
        margin: 3rem;
    }

    .page-footer {
        height: 5rem;

        flex-shrink: 0;

        background-color: ${(props) => props.theme.colors.accentPrimary};
        color: ${(props) => props.theme.colors.white};
    }
`;

export default PageLayoutSC;
