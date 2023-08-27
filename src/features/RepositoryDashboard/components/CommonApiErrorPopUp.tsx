import React from 'react';
import Popup from 'reactjs-popup';

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
            <h2>ERROR{statusCode && `: ${statusCode}`}</h2>
            <div>Something went wrong.</div>
        </Popup>
    );
};

export default CommonApiErrorPopUp;
