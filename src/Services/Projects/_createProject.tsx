import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {IProjectCreate} from '../../Models/projectsModels';

const createProject = async (projectUpdate:IProjectCreate):Promise<boolean> => {
    const result = await api().put(`/Projects/`, projectUpdate);

    throwIfError(result);

    return  result.status === 200; 
    
}

export default createProject;