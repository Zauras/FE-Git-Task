import LoadingScreenSC from './LoadingScreenSC.styles';
import { ReactNode } from 'react';

const LoadingScreen = ({ isLoading, children }: { isLoading: boolean; children: ReactNode }) => {
    return (
        <LoadingScreenSC>
            {isLoading && (
                <>
                    <div className="overlay-mask" />
                    <div className="spinner">
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <filter id="shadow">
                                    <feDropShadow
                                        dx="0"
                                        dy="0"
                                        stdDeviation="1.5"
                                    />
                                </filter>
                            </defs>
                            <circle cx="50" cy="50" r="45" />
                        </svg>
                    </div>
                </>
            )}

            {children}
        </LoadingScreenSC>
    );
};

export default LoadingScreen;
