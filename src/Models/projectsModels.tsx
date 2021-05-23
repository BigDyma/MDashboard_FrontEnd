export interface IProjectResponse {
    Id: number;
    Name: string;
}

export interface IProjectCreate {
    UserId: number;
    Name: string;
}

export type IProjectUpdate = IProjectResponse;

