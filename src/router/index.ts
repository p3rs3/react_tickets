import Clients from "../pages/Clients";
import Login from "../pages/Login";
import { Routes } from "./interfaces/routes.interface";

export enum RouteNames {
    LOGIN = '/login',
    CLIENTS = '/'
}

export const publicRoutes: Routes[] = [
    {
        path: RouteNames.LOGIN,
        exact: true,
        component: Login
    }
];

export const privateRoutes: Routes[] = [
    {
        path: RouteNames.CLIENTS,
        exact: true,
        component: Clients
    }
];