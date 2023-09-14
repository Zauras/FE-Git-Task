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

    .modal-content {
        z-index: 3;
        position: relative;
        min-height: 15rem;
        min-width: 18rem;
        max-height: 45rem;
        max-width: 40rem;

        margin: 3rem;
        padding: 3rem 3rem 3rem 4rem;

        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        border-radius: 1rem;

        .modal-header {
            height: 100%;
            width: 100%;
            min-height: 3rem;

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

            .modal-header-action-container {
                position: relative;

                display: flex;
                justify-content: center;
                align-items: center;

                .close-action {
                    position: absolute;
                    left: -0.75rem;
                    top: -3rem;
                }
            }
        }

        .modal-body {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            padding-right: 1.5rem;
        }

        .modal-footer {
            width: 100%;

            bottom: 0;
            margin-top: auto;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
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
        animation-delay: 50ms;
        transition: all 0.3s;

        .modal-content {
            transform: translateX(0);
            transition: all 0.3s;
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
            transition: all 0.3s;
        }
    }

    // =========== Debug ==========
    &.debug-blocks {
        .modal-content {
            border: 1px solid violet;

            .modal-header {
                border: 1px solid blue;
            }
            .modal-body {
                border: 1px solid red;
            }
            .modal-footer {
                border: 1px solid orange;
            }
        }
    }
`;

export default ModalSC;
