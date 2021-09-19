import { AuthActionEnum, SetErrorAction, SetIsAuthAction, SetUserAction } from './types'
import { User } from '../../../models/User';
import { AppDispatch } from '../..';
import axios from 'axios';

export const AuthActionCreators = {
    setUser: (user: User): SetUserAction => {
        return {
            type: AuthActionEnum.SET_USER,
            payload: user
        }
    },
    setError: (error: string): SetErrorAction => {
        return {
            type: AuthActionEnum.SET_ERROR,
            payload: error
        }
    },
    setIsAuth: (isAuth: boolean): SetIsAuthAction => {
        return {
            type: AuthActionEnum.SET_AUTH,
            payload: isAuth
        }
    },
    login: (username: string, passowrd: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<User[]>('./mock-data/users.json');
            const users = response.data;

            const user = users.find(user => {
                return (
                    user.username === username &&
                    user.password === passowrd
                )
            });

            if (user) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', user.username);
                dispatch(AuthActionCreators.setIsAuth(true));
                dispatch(AuthActionCreators.setUser(user));
                dispatch(AuthActionCreators.setError(''));

                return;
            }

            dispatch(AuthActionCreators.setError('Пользователь не найден'));
        } catch(e) {
            
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            
        } catch(e) {
            
        }
    }
}