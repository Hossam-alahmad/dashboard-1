import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout tab="home" />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals