import * as Yup from 'yup';

export interface IReportResponse {
  Id: number;
  Name: string;
  Link: string;
  CreatedTime: Date | null;
}

export interface IReportCreate {
  Name: string;
  Link: string;
  ProjectId: number;
}

export type IReportUpdate = IReportCreate;

export const NewReportSchema = Yup.object().shape({
  reportName: Yup.string().required('provide report name'),
  reportLink: Yup.string().required('provide report link'),
  projectName: Yup.number().required()
});
