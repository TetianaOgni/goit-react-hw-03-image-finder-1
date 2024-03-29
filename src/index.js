import React from 'react';
import ReactDOM from 'react-dom/client';
import {ToastContainer} from 'react-toastify'
import App  from 'components/App';
import 'react-toastify/dist/ReactToastify.css'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
    <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
</React.StrictMode>

);
