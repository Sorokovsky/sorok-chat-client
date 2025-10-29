import { ROUTES } from "@/shared/routes";
import { FC, JSX } from "react";
import { createBrowserRouter, RouterProvider as Provider, RouteObject } from "react-router";
import { HOME_ROUTE } from '@/shared/routes/';
import { Layout } from "./layout";
import { NEW_USER_ROUTE } from '@/shared/routes/routes';

const routerObjects: RouteObject[] = ROUTES.map(route => {
    return {
        element: route.element,
        path: route.path,
    }
})

const router = createBrowserRouter([
    {
        path: HOME_ROUTE.path,
        element: <Layout />,
        children: [...routerObjects, {
            element: NEW_USER_ROUTE.element,
            path: NEW_USER_ROUTE.path
        }]
    }
]);

export const RouterProvider: FC = (): JSX.Element => {
    return (
        <Provider router={router} />
    );
};