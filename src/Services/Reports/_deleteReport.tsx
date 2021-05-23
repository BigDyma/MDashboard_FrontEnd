import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';

const deleteReport = async (id:number):Promise<boolean> => {
    const result = await api().delete(`/Report/${id}`)
    throwIfError(result);

    return  result.status === 200;
    
}

export default deleteReport;