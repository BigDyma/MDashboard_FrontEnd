import * as Yup from 'yup';

export interface IReportResponse {
  id: number;
  name: string;
  link: string;
  createdTime: Date | null;
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
