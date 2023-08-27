import Popup from 'reactjs-popup';
import React from 'react';

const LimitReqErrorPopUp = ({
    isLimitReqError,
    removeError = () => null,
}: {
    isLimitReqError: boolean;
    removeError?: () => void;
}) => {
    return (
        <Popup
            open={isLimitReqError}
            onClose={removeError}
            position="center center"
            closeOnDocumentClick
        >
            <div>ERROR: Exceeded request limit. </div>
            <div>Try log in with GitHub access token to mitigate issue.</div>
        </Popup>
    );
};

export default LimitReqErrorPopUp;
