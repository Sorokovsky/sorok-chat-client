import { ROUTES } from "@/shared/routes";
import { FC, JSX } from "react";
import { createBrowserRouter, RouterProvider as Provider, RouteObject } from "react-router";
import { HOME_ROUTE } from '@/shared/routes/';
import { Layout } from "./layout";

const routerObjects: RouteObject[] = ROUTES.map(route => ({
    element: route.element,
    path: route.path,
}))

const router = createBrowserRouter([
    {
        path: HOME_ROUTE.path,
        element: <Layout />,
        children: routerObjects
    }
]);

export const RouterProvider: FC = (): JSX.Element => {
    return (
        <Provider router={router} />
    );
};