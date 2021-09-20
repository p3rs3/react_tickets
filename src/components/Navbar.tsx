import React, { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useActions } from '../hooks/useActions';
import { useHistory } from 'react-router';
import { RouteNames } from '../router';

export const Navbar: FC = () => {
    const {logout} = useActions();
    const history = useHistory();
 
    return (
        <Layout.Header>
            <Row justify="space-between">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item 
                        key="1"
                        onClick={() => {
                            history.push(RouteNames.CLIENTS);
                        }}
                    >
                        Клиенты
                    </Menu.Item>
                    <Menu.Item 
                        key="2"
                        onClick={() => {
                            history.push(RouteNames.PROJECTS);
                        }}
                    >
                        Проекты
                    </Menu.Item>
                    <Menu.Item 
                        key="3"
                        onClick={() => {
                            history.push(RouteNames.TOKENS);
                        }}
                    >
                        Токены
                    </Menu.Item>
                </Menu>
                <div className="nav-button"
                    key="1"
                    onClick={logout}
                >
                    Выйти
                </div>
            </Row>
        </Layout.Header>
    )
}