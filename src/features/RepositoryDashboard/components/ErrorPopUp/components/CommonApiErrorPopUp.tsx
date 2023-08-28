import React from 'react';
import Popup from 'reactjs-popup';

import PopUpSC from '@/features/RepositoryDashboard/components/ErrorPopUp/PopUpSC.styles';
import CloseButtonSC from '@/components/Button/CloseButtonSC.styles';

const CommonApiErrorPopUp = ({
    isError,
    statusCode,
    removeError,
}: {
    isError: boolean | undefined;
    statusCode: number | null | undefined;
    removeError?: () => void;
}) => {
    return (
        <Popup open={isError} onClose={removeError} position="center center" closeOnDocumentClick>
            <PopUpSC>
                <CloseButtonSC className="close-button" onClick={removeError}>
                    X
                </CloseButtonSC>
                <h2>ERROR{statusCode && `: ${statusCode}`}</h2>
                <div>Something went wrong.</div>
            </PopUpSC>
        </Popup>
    );
};

export default CommonApiErrorPopUp;
