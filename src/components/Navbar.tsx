import React, { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useActions } from '../hooks/useActions';

export const Navbar: FC = () => {
    const {logout} = useActions();

    return (
        <Layout.Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Клиенты</Menu.Item>
                <Menu.Item key="2">Проекты</Menu.Item>
                <Menu.Item key="3">Токены</Menu.Item>
            </Menu>
            <div className="nav-button"
                key="1"
                onClick={logout}
            >
                Выйти
            </div>
        </Layout.Header>
    )
}