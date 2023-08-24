import Popup from 'reactjs-popup';
import React from 'react';

const LimitReqErrorPopUp = ({
    isLimitReqError,
    removeLimitReqError,
}: {
    isLimitReqError: boolean;
    removeLimitReqError: () => void;
}) => {
    return (
        <Popup
            open={isLimitReqError}
            onClose={removeLimitReqError}
            position="center center"
            closeOnDocumentClick
        >
            <div>ERROR: Exceeded request limit. </div>
            <div>Try log in with GitHub access token to mitigate issue.</div>
        </Popup>
    );
};

export default LimitReqErrorPopUp;
