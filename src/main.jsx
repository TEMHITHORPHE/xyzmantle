

import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import WagmiRainbowKitProvider from './providers/WagmiRainbowKitProvider.jsx';

import App from './App.jsx'
import MantleBridge from './mantleBridge.jsx';
// import Bridge from './bridge.jsx';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/bridge",
    element: <MantleBridge />,
    caseSensitive: false,
    // index: true,
    children: [
      {
        path: ''
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiRainbowKitProvider>
      <RouterProvider router={router}></RouterProvider>
    </WagmiRainbowKitProvider>
  </React.StrictMode>
)
