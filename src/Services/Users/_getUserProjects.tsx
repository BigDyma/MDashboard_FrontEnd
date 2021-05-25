import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';
import { IProjectResponse } from '../../Models/projectsModels';
import IErrorResponse from '../../Models/errorModels';

const getUserProjects = async (
  id: number
): Promise<IProjectResponse[] | IErrorResponse> => {
  const result = await api().get<IProjectResponse[] | IErrorResponse>(
    `/Users/${id}/projects`
  );

  console.log(result, id);
  throwIfError(result);

  return result;
};

export default getUserProjects;
