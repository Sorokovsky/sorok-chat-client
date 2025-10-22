import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import { RouterProvider } from "@/components/providers/router";
import "./index.scss"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider />
    </StrictMode>
);