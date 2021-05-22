import { IRegisterRequest } from '../../../Models/authModels';
import api from '../../axios-config';
import {throwIfError} from '../../Helpers/throwCustomException';

const register = async (values: IRegisterRequest): Promise<any> => {
  const fullName = `${values.firstName} ${values.lastName}`;
  
  // excluding firstName and lastName and adding fullName.
  const { firstName, lastName, ...parsedValues } = values;
  const queryJSON = { fullName, ...parsedValues };

  const data = await api().post(`/Auth/register`, queryJSON);
  throwIfError(data)
};

export default register;
