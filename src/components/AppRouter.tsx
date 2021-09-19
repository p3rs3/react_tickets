import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../router';


export const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route 
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.CLIENTS}></Redirect>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>  
                    <Route 
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.LOGIN}></Redirect>
            </Switch>
    )
}