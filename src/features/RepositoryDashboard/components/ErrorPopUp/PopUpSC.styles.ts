import styled from '@emotion/styled';

const PopUpSC = styled.div`
    width: 100%;
    height: 100%;
    min-width: 25rem;
    min-height: 12rem;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;

    border: 2px solid ${(props) => props.theme.colors.borderGray};
    border-radius: 15px;
    background-color: white;

    .close-button {
        position: relative;
        top: -4rem;
        margin-bottom: -5rem;
        margin-right: 1.5rem;
        float: right;
        align-self: end;
    }
`;

export default PopUpSC;
