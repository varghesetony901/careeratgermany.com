import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { hydrate, render } from "react-dom";

// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");

const APP = (
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>

  </React.StrictMode>
);


if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </Provider>

//   </React.StrictMode>
// );


