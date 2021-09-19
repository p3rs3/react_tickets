import React, { useEffect } from 'react';
import { Layout } from 'antd';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';
import './App.css';
import { useActions } from './hooks/useActions';
import { User } from './models/User'
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
    const {setIsAuth, setUser} = useActions();
    const {isAuth} = useTypedSelector(state => state.authReducer)

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true') {
            const user = localStorage.getItem('user');

            setIsAuth(true);
            setUser({username: user} as User);
        }
    }, []);

    return (
        <Layout>
            { isAuth && <Navbar /> }
            <AppRouter />
        </Layout>
    );
}

export default App;
