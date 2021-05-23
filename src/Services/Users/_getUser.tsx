import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {IUserResponse} from '../../Models/userModels';
import IErrorResponse from '../../Models/errorModels';

const getUser = async (id:number):Promise<IUserResponse | IErrorResponse> => {
    const result = await api().get<IUserResponse | IErrorResponse>(`/Users/${id}`)
    throwIfError(result);

    return result;
}

export default getUser;