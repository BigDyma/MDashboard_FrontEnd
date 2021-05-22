import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';


const getUser = async (id:number) => {
    const result = await api().get(`/Users/${id}/projects`)
    throwIfError(result);

    return result;
}