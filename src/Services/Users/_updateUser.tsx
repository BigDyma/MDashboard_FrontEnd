import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {ILogin } from '../../Models/authModels'

const updateUser = async (userUpdate: ILogin & {id: number}) => {
    const result = await api().put('/Users/', userUpdate);
    
    throwIfError(result);

    return result;
}