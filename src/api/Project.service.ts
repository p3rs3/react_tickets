import axios, { AxiosResponse } from "axios";
import { Project } from "../models/Projects";

export default class ProjectService {
    static async getProjects(): Promise<AxiosResponse<Project[]>> {
        return axios.get<Project[]>('./mock-data/projects.json');
    }
}