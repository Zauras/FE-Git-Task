import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import StyleProvider from '@/styles/StyleProvider';

import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <StyleProvider>
            <RouterProvider router={router} />
        </StyleProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
