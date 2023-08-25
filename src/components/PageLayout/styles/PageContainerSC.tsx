import styled from '@emotion/styled';

export const PageContainerSC = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${(props) => props.theme.colors.textGray};
    background-color: ${(props) => props.theme.colors.white};
`;
