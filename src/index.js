import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import store from "app/store";
import { Provider } from "react-redux";
import "./index.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

//primeflex
import "primeflex/primeflex.css";

// App
import App from "./App";

import LoadingScreen from "pages/LoadingScreen";
import ErrorBoundary from "components/ErrorBoundary";
import ErrorPage from "pages/ErrorPage";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage/>}>
      <Provider store={store}>
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
