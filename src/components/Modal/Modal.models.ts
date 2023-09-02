import { ReactNode } from 'react';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    afterClose?: () => void;
    modalTitle?: string;
    footerChildren?: ReactNode | string | null;
    children: ReactNode | string;
}

export type { IModalProps };
