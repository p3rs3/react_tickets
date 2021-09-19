import { User } from "../../../models/User";

export interface AuthState {
    isAuth: boolean;
    error: string;
    user: User;
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: User;
}

export type AuthAction = 
    SetIsAuthAction |
    SetErrorAction |
    SetUserAction