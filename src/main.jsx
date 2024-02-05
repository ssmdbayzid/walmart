import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
// import router from './Routes/Router.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from './app/store.js'
import Providers from './Provider/index.jsx'
import MainLayout from './layout/MainLayout.jsx'


{/* <RouterProvider router={router}/> */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Provider store={store}>
      <Providers>
    <BrowserRouter>
    <MainLayout />
    </BrowserRouter>    
    </Providers>
    </Provider>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseHover={false} />                      
    </div>
  </React.StrictMode>,
)
