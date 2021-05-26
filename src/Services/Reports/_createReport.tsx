import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';
import { IReportCreate } from '../../Models/reportModels';

const createReport = async (reportCreate: IReportCreate): Promise<boolean> => {
  console.log(reportCreate.ProjectId, 'report create prop from api');
  // @TODO refactor this  stupid bug
  const newReportCreate = {
    ProjectId: parseInt(reportCreate.ProjectId.toString(), 10),
    Name: reportCreate.Name,
    Link: reportCreate.Link
  };

  const result = await api().post('/Report/add', newReportCreate);

  throwIfError(result);

  return result.status === 200;
};

export default createReport;
