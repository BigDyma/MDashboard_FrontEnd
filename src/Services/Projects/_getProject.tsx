import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {IProjectResponse} from '../../Models/projectsModels';
import IErrorResponse from '../../Models/errorModels';

const getProject = async (id:number):Promise<IProjectResponse | IErrorResponse> => {
    const result = await api().get<IProjectResponse | IErrorResponse>(`/Projects/${id}`)
    throwIfError(result);

    return  result.data;
    
}

export default getProject;