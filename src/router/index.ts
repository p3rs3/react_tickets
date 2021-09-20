import Clients from "../pages/Clients";
import Login from "../pages/Login";
import Projects from "../pages/Projects";
import Tokens from "../pages/Tokens";
import { Routes } from "./interfaces/routes.interface";

export enum RouteNames {
    LOGIN = '/login',
    CLIENTS = '/clients',
    PROJECTS = '/projects',
    TOKENS = '/tokens',
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
    },
    {
        path: RouteNames.PROJECTS,
        exact: true,
        component: Projects
    },
    {
        path: RouteNames.TOKENS,
        exact: true,
        component: Tokens
    }
];