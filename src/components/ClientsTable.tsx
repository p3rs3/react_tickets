import React, { FC, useEffect, useState } from 'react';
import { Table, Space, Layout, Button, Modal } from 'antd';
import ClientService from '../api/ClientService';
import { Client } from '../models/Client';
import { ClientProjectsModal } from './ClientProjectsModal';


export const ClientsTable: FC = () => {
    const [clients, setClients] = useState([] as Client[]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalClient, setModalClient] = useState({} as Client);

    useEffect(() => {
        (async () => {
            const response = await ClientService.getClients();
            const clients: Client[] = response.data;
            setClients(clients);
        })()
    }, []);

    const showProjects = (record: any) => {
        setIsModalActive(true);
        setModalClient(record)
    }

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Дата создания',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Дата обновления',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Проекты',
            key: 'projects',
            dataIndex: 'projects',
            render: (text: any, record: any) => (
                <Space size="middle">
                    <Button type="primary" onClick={(e) => showProjects(record)}>
                        Показать проекты
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <Layout>
            <Table columns={columns} dataSource={clients} />
            { isModalActive && <ClientProjectsModal client={modalClient} isVisible={isModalActive} setVisible={setIsModalActive} /> }
        </Layout>
    )
}