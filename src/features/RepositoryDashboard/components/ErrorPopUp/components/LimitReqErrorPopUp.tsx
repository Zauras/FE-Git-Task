import React from 'react';
import Popup from 'reactjs-popup';

import CloseButtonSC from '@/components/Button/CloseButtonSC.styles';
import PopUpSC from '../PopUpSC.styles';

const LimitReqErrorPopUp = ({
    isError,
    removeError = () => null,
}: {
    isError: boolean;
    removeError?: () => void;
}) => {
    return (
        <Popup open={isError} onClose={removeError} position="center center" closeOnDocumentClick>
            <PopUpSC>
                <CloseButtonSC className="close-button" onClick={removeError}>
                    X
                </CloseButtonSC>
                <div>ERROR: Exceeded request limit. </div>
                <div>Try log in with GitHub access token to mitigate issue.</div>
            </PopUpSC>
        </Popup>
    );
};

export default LimitReqErrorPopUp;
