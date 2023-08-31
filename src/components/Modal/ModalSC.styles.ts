import styled from '@emotion/styled';

const ModalSC = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);

    // Animation base preparation:
    //opacity: 0;
    //transition: all 0.3s ease-in-out;
    //pointer-events: none;

    .modal-content {
        z-index: 3;
        max-height: 75vh;
        max-width: 50rem;
        background-color: ${(props) => props.theme.colors.backgroundPrimary};
        border-radius: 1rem;

        // Animation base preparation:
        //transform: translateY(200px);

        //.modal-header,
        //.modal-footer {
        //    padding: 1rem;
        //}

        .modal-header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .modal-title-container {
                text-align: center;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .modal-header-close-action-container {
                position: relative;
                text-align: end;

                display: flex;
                justify-content: center;
                align-items: center;

                .close-action {
                    position: absolute;
                    margin-left: -4rem;
                }
            }
        }

        .modal-body {
            padding: 1rem;
        }
    }

    // ============ CSS Transition ============

    // Open Animation:
    &.enter {
        opacity: 0;

        .modal-content {
            transform: scale(0.9);
        }
    }
    &.enter-active {
        opacity: 1;
        transition: all 0.5s;

        .modal-content {
            transform: translateX(0);
            transition: all 0.5s;
        }
    }

    // Close Animation:
    &.exit {
        opacity: 1;
    }
    &.exit-active {
        opacity: 0;
        transition: all 0.5s;

        .modal-content {
            transform: scale(0.9);
            transition: all 0.5s;
        }
    }
`;

export default ModalSC;
