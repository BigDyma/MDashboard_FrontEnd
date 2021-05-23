import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {IReportCreate} from '../../Models/reportModels';

const createReport = async (projectUpdate:IReportCreate):Promise<boolean> => {
    const result = await api().put(`/Projects/`, projectUpdate);

    throwIfError(result);

    return  result.status === 200; 
    
}

export default createReport;