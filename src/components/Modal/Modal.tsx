import React, { ReactNode, SyntheticEvent } from 'react';
import ReactModal from 'react-modal';

import CloseButtonSC from '@/components/Button/CloseButtonSC.styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Modal = ({
    isOpen,
    onClose,
    label = '',
    children,
}: {
    isOpen: boolean;
    onClose: (event: SyntheticEvent) => void;
    label: string;
    children: ReactNode;
}) => {
    return (
        <ReactModal ariaHideApp={false} isOpen={isOpen} style={customStyles}>
            <div className="modal-header">
                <div className="header-label">
                    <h2>{label}</h2>
                </div>

                <CloseButtonSC className="close-action" onClick={onClose}>
                    X
                </CloseButtonSC>
            </div>

            <div className="modal-content">{children}</div>
        </ReactModal>
    );
};

export default Modal;
