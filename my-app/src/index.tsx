import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Theme preset={presetGpnDefault}>
        <Provider store={store}>
            <App />
        </Provider>
    </Theme>
);

reportWebVitals();
