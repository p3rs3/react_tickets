import React, { FC } from 'react';
import { Layout, Row } from 'antd';
import { useHistory } from 'react-router';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Navbar: FC = () => {
    const router = useHistory();
    const {isAuth} = useTypedSelector(state => state.authReducer);

    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <div style={{color: 'white'}}
                            key="1"
                            onClick={() => console.log('logout')}
                        >
                            Выйти
                        </div>
                        :
                        <div style={{color: 'white'}}
                            key="1"
                            onClick={() => router.push(RouteNames.LOGIN)}
                        >
                            Войти
                        </div>
                }
            </Row>
        </Layout.Header>
    )
}