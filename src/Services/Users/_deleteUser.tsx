import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';

const deleteUser = async (id: number):Promise<boolean> => {
    const result = await api().delete(`/Users/${id}`);
    throwIfError(result);

    return result.status === 200;
}

export default deleteUser;