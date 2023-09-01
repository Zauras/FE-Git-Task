import React from 'react';
import Popup from 'reactjs-popup';

import CloseButtonSC from '@/components/Button/ButtonIcon/CloseButtonSC.styles';
import PopUpSC from '../PopUpSC.styles';

const LimitReqErrorPopUp = ({
    isError,
    removeError,
}: {
    isError: boolean;
    removeError: () => void;
}) => {
    return (
        <Popup open={isError} onClose={removeError} position="center center" closeOnDocumentClick>
            <PopUpSC>
                <CloseButtonSC className="close-button" onClick={removeError}>
                    X
                </CloseButtonSC>
                <h2>ERROR: Exceeded request limit. </h2>
                <div>Try log in with GitHub access token to mitigate issue.</div>
            </PopUpSC>
        </Popup>
    );
};

export default LimitReqErrorPopUp;
