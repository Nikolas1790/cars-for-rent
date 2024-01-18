import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from 'common/GiobalStyles';
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/cars-for-rent' >
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
      
  </React.StrictMode>
);

