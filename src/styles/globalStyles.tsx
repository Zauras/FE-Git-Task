import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
            body {
                font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }
        `}
    />
);

export default GlobalStyles;
