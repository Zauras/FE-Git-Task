import { css, Global, Theme, useTheme } from '@emotion/react';
import { FCwC } from '@/utils/react.types';

const GlobalStyles: FCwC = () => {
    const theme: Theme = useTheme();

    return (
        <Global
            styles={css`
                body {
                    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }

                /* width */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                /* Track */
                ::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px grey;
                    border-radius: 4px;
                }
                /* Handle */
                ::-webkit-scrollbar-thumb {
                    background: ${theme.colors.primary};
                    border-radius: 4px;
                }
                /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                    background: ${theme.colors.primaryHover};
                }
            `}
        />
    );
};

export default GlobalStyles;
