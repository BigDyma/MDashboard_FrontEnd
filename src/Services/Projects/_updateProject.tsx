import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {IProjectUpdate} from '../../Models/projectsModels';
import IErrorResponse from '../../Models/errorModels';

const updateProject = async (projectUpdate:IProjectUpdate):Promise<boolean> => {
    const result = await api().put<IProjectUpdate | IErrorResponse>(`/Projects/`, projectUpdate);

    throwIfError(result);

    return  result.status === 200; 
    
}

export default updateProject;