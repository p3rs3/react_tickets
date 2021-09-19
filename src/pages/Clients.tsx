import { Layout } from 'antd';
import React, { FC } from 'react';
import { ClientsTable } from '../components/ClientsTable';

const Clients: FC = () => {
    return (
        <Layout style={{height: 'calc(100vh - 64px)'}}>
            <ClientsTable />
        </Layout>
    )
}

export default Clients;

