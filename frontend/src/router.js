// Imports
import { createBrowserRouter } from 'react-router-dom';

// Importing pages
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './pages/templates/Layout';
import AboutPage from './pages/AboutPage';

// Route configuration
const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFoundPage/>,
        children: 
        [
            {   
                index: true,
                element: <Home/>,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
        ],
    }

]);

export default router;
