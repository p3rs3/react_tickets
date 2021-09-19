import axios, { AxiosResponse } from "axios";
import { Client } from "../models/Client";
import { Project } from "../models/Projects";

export default class ClientService {
    static async getClients(): Promise<AxiosResponse<Client[]>> {
        return axios.get<Client[]>('./mock-data/clients.json');
    }
}