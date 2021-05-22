import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';

const deleteUser = async (id: number) => {
    const result = await api().delete(`/Users/${id}`);
    throwIfError(result);
}

export default deleteUser;