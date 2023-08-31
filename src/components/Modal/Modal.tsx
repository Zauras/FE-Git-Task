import React, { ReactNode, SyntheticEvent, useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseButtonSC from '@/components/Button/CloseButtonSC.styles';
import ModalSC from '@/components/Modal/ModalSC.styles';

const eventStopPropagation = (event: SyntheticEvent) => {
    event.stopPropagation();
};

const Modal = ({
    isOpen,
    onClose,
    modalTitle = '',
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    modalTitle?: string;
    children: ReactNode;
}) => {
    const closeOnEscKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if ((e.key || e.key) === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscKeyDown);

        return function cleanup() {
            document.body.addEventListener('keydown', closeOnEscKeyDown);
        };
    }, [closeOnEscKeyDown]);

    return (
        <CSSTransition in={isOpen} unmountOnExit timeout={500}>
            <ModalSC className="modal" onClick={onClose}>
                <div className="modal-content" onClick={eventStopPropagation}>
                    <div className="modal-header">
                        <div className="modal-title-container">
                            <h2>{modalTitle}</h2>
                        </div>

                        <div className="modal-header-close-action-container">
                            <CloseButtonSC className="close-action" onClick={onClose}>
                                X
                            </CloseButtonSC>
                        </div>
                    </div>

                    <div className="modal-body">
                        {/*Contrary to popular belief, Lorem Ipsum is not simply random text. It has*/}
                        {/*roots in a piece of classical Latin literature from 45 BC, making it over*/}
                        {/*2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney*/}
                        {/*College in Virginia, looked up one of the more obscure Latin words,*/}
                        {/*consectetur, from a Lorem Ipsum passage, and going through the cites of the*/}
                        {/*word in classical literature, discovered the undoubtable source. Lorem Ipsum*/}
                        {/*comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"*/}
                        {/*(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a*/}
                        {/*treatise on the theory of ethics, very popular during the Renaissance. The*/}
                        {/*first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line*/}
                        {/*in section 1.10.32.*/}
                        {children}
                    </div>

                    <div className="modal-footer"> FOOTER</div>
                </div>
            </ModalSC>
        </CSSTransition>
    );
};

export default Modal;
