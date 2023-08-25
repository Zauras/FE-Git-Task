import styled from '@emotion/styled';

const ButtonSC = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    color: white;

    min-width: 5rem;
    height: 2rem;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;

    font-weight: 700;
`;

export default ButtonSC;
