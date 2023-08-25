import { Fragment, ReactNode } from 'react';

import { PageContainerSC } from './styles/PageContainerSC';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

const FullPageLayout = (props: { children?: ReactNode }) => (
    <Fragment>
        <ThemeProvider theme={theme}>
            <PageContainerSC>{props.children}</PageContainerSC>
        </ThemeProvider>
    </Fragment>
);

export default FullPageLayout;
