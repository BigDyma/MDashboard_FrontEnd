import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';
import { IReportCreate } from '../../Models/reportModels';

const createReport = async (reportCreate: IReportCreate): Promise<boolean> => {
  const result = await api().post(`/Report/add`, reportCreate);

  throwIfError(result);

  return result.status === 200;
};

export default createReport;
