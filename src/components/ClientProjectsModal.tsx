import React, { FC, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Client } from '../models/Client';
import { Project } from '../models/Projects';
import ProjectService from '../api/Project.service';

interface ClientProps {
    client: Client,
    isVisible: boolean,
    setVisible: (param: boolean) => void
}

export const ClientProjectsModal: FC<ClientProps> = ({client, isVisible, setVisible}) => {
    const [clientProjects, setClientsProjects] = useState([] as Project[]);

    useEffect(() => {
        (async () => {
            const response = await ProjectService.getProjects();
            const projects: Project[] = response.data;
            const clientProjects = projects.filter(project => project.client === client.id);
            setClientsProjects(clientProjects);
        })()
    }, []);

    const hideModal = () => {
        setVisible(false);
    };

    return (
        <Modal title="Проекты" visible={isVisible} onCancel={hideModal} footer={null}>
            { 
                clientProjects.length > 1
                    ?
                    clientProjects.map(project => {
                        return (
                            <p>
                                {project.domain}
                            </p>
                        )
                    })
                    :
                    <p>У клиента нет проектов...</p>
            }
        </Modal>
    )
}