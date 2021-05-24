import * as Yup from 'yup';

export interface IProjectResponse {
    Id: number;
    Name: string;
}

export interface IProjectCreate {
    UserId: number;
    Name: string;
}

export type IProjectUpdate = IProjectResponse;

export const ProjectSchema = Yup.object().shape({
    projectName: Yup.string().required("You should enter project name")
});