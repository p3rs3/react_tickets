import React, { FC, useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const {error, isAuth, user} = useTypedSelector(state => state.authReducer);
    const [username, setUserName] = useState('');;

    const [password, setPassword] = useState('')
    const submit = (e) => {
        dispatch(AuthActionCreators.login(username, password));
    }

    const submitFailed = () => {
        console.log('submit failed');
    }

    const loginChange = (e) => {
        setUserName(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <React.Fragment>
            <div className="login-form">
                <Form
                    onFinish={submit}
                    onFinishFailed={submitFailed}
                >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[{ required: true, message: 'Введите логин!' }]}
                    >
                        <Input value={username} onChange={loginChange}/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль!' }]}
                    >
                        <Input.Password value={password} onChange={passwordChange}/>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            {
                error !== ''
                    &&
                    <Alert
                        message="Неверные данные пользователя"
                        type="error"
                        className ="marginTop10"
                    />
            }
        </React.Fragment>
    )
}