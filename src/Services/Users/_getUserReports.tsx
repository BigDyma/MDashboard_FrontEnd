import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';
import { IReportResponse } from '../../Models/reportModels';
import IErrorResponse from '../../Models/errorModels';

const getUserReports = async (
  id: number
): Promise<IReportResponse[] | IErrorResponse> => {
  const result = await api().get<IReportResponse | IErrorResponse>(
    `/Users/${id}/reports`
  );

  throwIfError(result);

  return result;
};

export default getUserReports;
