import React, { FC } from 'react';
import { Col, Layout, Row } from 'antd';
import { LoginForm } from '../components/LoginForm';

const Login: FC = () => {
    return (
        <Layout className="login-layout">
            <Col>
                <LoginForm />
            </Col>
        </Layout>
    )
}

export default Login;

