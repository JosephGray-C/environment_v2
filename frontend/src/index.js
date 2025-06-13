// Project: Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing CSS
import './css/index.css';
import './css/Home.css';

// Importing pages
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilesPage from './pages/ProfilesPage';

// Route configuration
const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage/>,
    },
    {
        path: '/profiles',
        element: <ProfilesPage />,
        errorElement: <NotFoundPage />,
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);