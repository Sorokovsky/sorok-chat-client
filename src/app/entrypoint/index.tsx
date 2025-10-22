import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import { RouterProvider } from "../providers/";
import "../styles/index.scss"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider />
    </StrictMode>
);