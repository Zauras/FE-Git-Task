import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

import { FCwC } from '@/utils/react.types';
import GlobalStyles from '@/styles/globalStyles';

const StyleProvider: FCwC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default StyleProvider;
