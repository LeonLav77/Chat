require('./bootstrap');

import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import { AuthUserProvider } from "./context/AuthUserContext";

ReactDOM.render(
    <AuthUserProvider>
        <Router />
    </AuthUserProvider>,
    document.getElementById("root")
);