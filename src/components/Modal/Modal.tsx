import React, { ReactNode, SyntheticEvent, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import CloseButtonSC from '@/components/Button/ButtonIcon/CloseButtonSC.styles';
import ModalSC from '@/components/Modal/ModalSC.styles';

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
}: {
    isOpen: boolean;
    onClose: () => void;
    afterClose?: () => void;
    modalTitle?: string;
    children: ReactNode;
    footerChildren?: ReactNode | string | null;
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

                    <div className="modal-body">{children}</div>

                    <div className="modal-footer">{footerChildren}</div>
                </div>
            </ModalSC>
        </CSSTransition>,
        document.getElementById('root') as HTMLElement
    );
};

export default Modal;
