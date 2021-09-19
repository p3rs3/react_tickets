import React from 'react';
import { Layout } from 'antd';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
    return (
        <Layout>
            <Navbar />
            <AppRouter />
        </Layout>
    );
}

export default App;
