import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';
import { IReportResponse } from '../../Models/reportModels';
import IErrorResponse from '../../Models/errorModels';

const getProjectsReports = async (
  id: number
): Promise<IReportResponse[] | IErrorResponse> => {
  const result = await api().get<IReportResponse[] | IErrorResponse>(
    `/Projects/${id}/Reports`
  );

  throwIfError(result);

  return result;
};

export default getProjectsReports;
