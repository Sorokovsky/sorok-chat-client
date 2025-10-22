import { ROUTES } from "../routes";
import { FC, JSX } from "react";
import { createBrowserRouter, RouterProvider as Provider, RouteObject } from "react-router";

const routerObjects: RouteObject[] = ROUTES.map(route => ({
    element: route.element,
    path: route.path,
}))

const router = createBrowserRouter(routerObjects);

export const RouterProvider: FC = (): JSX.Element => {
    return (
        <Provider router={router} />
    );
};