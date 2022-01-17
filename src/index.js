import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import MutantProvider from "./context/mutants-context";

ReactDOM.render(
    <MutantProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MutantProvider>,
    document.getElementById("root")
);
