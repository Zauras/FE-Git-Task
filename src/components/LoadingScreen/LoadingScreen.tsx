import { ReactNode } from 'react';

import LoadingScreenSC from '@/components/LoadingScreen/LoadingScreen.styles';

const LoadingScreen = ({ isLoading, children }: { isLoading: boolean; children: ReactNode }) => {
    return (
        <LoadingScreenSC>
            {isLoading && (
                <>
                    <div className="overlay-mask" />
                    <progress className="spinner">
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <filter id="shadow">
                                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" />
                                </filter>
                            </defs>
                            <circle cx="50" cy="50" r="45" />
                        </svg>
                    </progress>
                </>
            )}

            {children}
        </LoadingScreenSC>
    );
};

export default LoadingScreen;
