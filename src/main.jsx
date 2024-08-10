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
import LoadingContextProvider from './contexts/LoadingContextProvider.jsx'
import VideoUrlContextProvider from './contexts/input/VideoUrlContextProvider.jsx'
import ShortsUrlContextProvider from './contexts/input/ShortsUrlContextProvider.jsx'
import ErrorContextProvider from './contexts/ErrorContextProvider.jsx'

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
    <ErrorContextProvider>
        <FormSubmitContextProvider>
            <VideoProvider>
                <ShortsContextProvider>
                    <SearchVideoProvider>
                        <ImageLoadProvider>
                            <LoadingContextProvider>
                                <VideoUrlContextProvider>
                                    <ShortsUrlContextProvider>
                                        <RouterProvider router={router} />
                                    </ShortsUrlContextProvider>
                                </VideoUrlContextProvider>
                            </LoadingContextProvider>
                        </ImageLoadProvider>
                    </SearchVideoProvider>
                </ShortsContextProvider>
            </VideoProvider>
        </FormSubmitContextProvider>
    </ErrorContextProvider>


)
