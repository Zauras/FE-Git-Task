import React from 'react';
import Popup from 'reactjs-popup';

const CommonApiErrorPopUp = ({
    isError,
    removeError,
    statusCode,
}: {
    isError: boolean;
    removeError: () => void;
    statusCode: number | null;
}) => {
    return (
        <Popup open={isError} onClose={removeError} position="center center" closeOnDocumentClick>
            <h2>ERROR{statusCode && `: ${statusCode}`}</h2>
            <div>Something went wrong.</div>
        </Popup>
    );
};

export default CommonApiErrorPopUp;
