import React from 'react';
import Popup from 'reactjs-popup';

import IconButtonSC from '@/components/Button/IconButton/IconButton.styles';
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
                <IconButtonSC className="close-button" onClick={removeError}>
                    X
                </IconButtonSC>
                <h2>ERROR: Exceeded request limit. </h2>
                <div>Try log in with GitHub access token to mitigate issue.</div>
            </PopUpSC>
        </Popup>
    );
};

export default LimitReqErrorPopUp;
