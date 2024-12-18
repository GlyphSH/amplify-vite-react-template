import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import "./index.css";
import {Amplify} from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import '/public/assets/bootstrap/css/bootstrap.min.css';
import '/public/assets/css/Montserrat.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css';
import '/public/assets/css/baguetteBox.min.css';
import '/public/assets/css/vanilla-zoom.min.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
