import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import IconButtonSC from '@/components/Button/IconButton/IconButton.styles';
import ModalSC from '@/components/Modal/Modal.styles';
import { IModalProps } from '@/components/Modal/Modal.models';

const eventStopPropagation = (event: SyntheticEvent) => {
    event.stopPropagation();
};

const Modal = ({
    isOpen,
    onClose,
    afterClose,
    children,
    modalTitle = '',
    footerChildren = null,
}: IModalProps) => {
    const closeOnEscKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if ((e.key || e.key) === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return function cleanup() {
            document.body.style.overflow = 'unset';
            if (afterClose) {
                afterClose();
            }
        };
    }, []);

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscKeyDown);

        return function cleanup() {
            document.body.addEventListener('keydown', closeOnEscKeyDown);
        };
    }, [closeOnEscKeyDown]);

    return ReactDOM.createPortal(
        <CSSTransition in={isOpen} unmountOnExit timeout={300}>
            <ModalSC className="modal" onClick={onClose}>
                <div className="modal-content" onClick={eventStopPropagation}>
                    <header className="modal-header">
                        <div className="modal-title-container">
                            <h2>{modalTitle}</h2>
                        </div>

                        <div className="modal-header-action-container">
                            <IconButtonSC className="close-action" onClick={onClose}>
                                X
                            </IconButtonSC>
                        </div>
                    </header>

                    <section className="modal-body">{children}</section>

                    {footerChildren && <footer className="modal-footer">{footerChildren}</footer>}
                </div>
            </ModalSC>
        </CSSTransition>,
        document.getElementById('root') as HTMLElement
    );
};

export default Modal;
