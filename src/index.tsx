import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import FullPageLayout from './components/Layout/FullPageLayout';
import HomePage from './routes/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <FullPageLayout>
            <RouterProvider router={router} />
        </FullPageLayout>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
