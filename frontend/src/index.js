// Project: Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing CSS
import './css/index.css';
import './css/Global.css';

// Importing pages
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilesPage from './pages/ProfilesPage';
import ProfilePage from './pages/ProfilePage';

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
        children: [
            {
                path: '/profiles/:id',
                element: <ProfilePage />,
            },
        ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);