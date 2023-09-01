import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from '@emotion/react';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/globalStyles';

export const decorators = [
    withThemeFromJSXProvider({
        Provider: ThemeProvider,
        defaultTheme: theme as string,
        themes: { light: theme },
        GlobalStyles, // Adds your GlobalStyles component to all stories
    }),
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            theme: themes.dark,
        },
    },
};

export default preview;
