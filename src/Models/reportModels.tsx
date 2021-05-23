export interface IReportResponse {
    Id: number;
    Name: string;
    Link: string;
    CreatedTime: Date;
}

export interface IReportCreate {
    Name:string;
    Link: string;
    ProjectId: number;
}

export type IReportUpdate = IReportCreate;