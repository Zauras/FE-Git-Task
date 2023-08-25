import styled from '@emotion/styled';

const CloseButtonSC = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    color: white;

    width: 2rem;
    height: 2rem;

    border: none;
    border-radius: 100px;
    padding: 0.5rem;

    font-weight: 700;
`;

export default CloseButtonSC;
