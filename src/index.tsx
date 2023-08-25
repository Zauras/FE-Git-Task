import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import FullPageLayout from './components/Layout/FullPageLayout';
import HomePage from '@/pages/HomePage';
import theme from '@/styles/theme';
import { PageContainerSC } from '@/components/Layout/styles/PageContainerSC';
import { GitHubAccessProvider } from '@/state/githubAcessContext/GithubAccessContext';
import RepositoryDashboard from '@/features/RepositoryDashboard/RepositoryDashboard';
// @ts-ignore
import { ThemeProvider } from '@emotion/react';

const Hello = () => {
    return (
        <>
            <GitHubAccessProvider>
                <FullPageLayout>
                    <RepositoryDashboard />
                </FullPageLayout>
            </GitHubAccessProvider>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Hello />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);

// root.render(
//     // <React.StrictMode>
//         {/*<RouterProvider router={router} />*/}
//     <div>
//         <HomePage />
//         </div>
//     // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
