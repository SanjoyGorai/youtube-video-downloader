import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VideoProvider from './contexts/VideoProvider.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "contacts/",
        element: 'contacts page has not created yet!!',
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <VideoProvider>
        <RouterProvider router={router} />
    </VideoProvider>
)
