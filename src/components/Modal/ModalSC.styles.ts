import styled from '@emotion/styled';

const ModalSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-height: 75vh;
    max-width: 50rem;

    .modal-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .header-label {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .close-action {
            float: right;
        }
`;

export default ModalSC;
