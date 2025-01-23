import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import { store } from "./redux-toolkit/store.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          // transition={Bounce}
          />
      </Provider>
  </StrictMode>, 
)
