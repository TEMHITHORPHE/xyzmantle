

import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Bridge from './bridge.jsx';

import WagmiRainbowKitProvider from './providers/WagmiRainbowKitProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/bridge",
    element: <Bridge />,
    caseSensitive: false
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiRainbowKitProvider>
      <RouterProvider router={router}></RouterProvider>
    </WagmiRainbowKitProvider>
  </React.StrictMode>
)
