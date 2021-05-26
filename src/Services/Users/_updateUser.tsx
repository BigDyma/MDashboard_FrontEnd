import api from '../axios-config';
import { throwIfError } from '../Helpers/throwCustomException';

import { IUserUpdate } from '../../Models/userModels';

const updateUser = async (userUpdate: IUserUpdate): Promise<boolean> => {
  const result = await api().put('/Users/', userUpdate);

  throwIfError(result);

  return result.status === 200;
};

export default updateUser;
