import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VideoProvider, { SearchVideoProvider } from './contexts/VideoProvider.jsx'
import ShortsContextProvider from './contexts/ShortsContextProvider.jsx'
import FormSubmitContextProvider from './contexts/FormSubmitContextProvider.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx'
import ImageLoadProvider from './contexts/ImageLoadProvider.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "contacts/",
        element: 'contacts page has not created yet!!',
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <FormSubmitContextProvider>
        <VideoProvider>
            <ShortsContextProvider>
                <SearchVideoProvider>
                    <ImageLoadProvider>
                        <RouterProvider router={router} />
                    </ImageLoadProvider>
                </SearchVideoProvider>
            </ShortsContextProvider>
        </VideoProvider>
    </FormSubmitContextProvider>

)
