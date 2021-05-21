import { IRegisterRequest } from '../../Models/authModels';
import handleResponse from '../Helpers/handleRespons';

const register = async (values: IRegisterRequest): Promise<any> => {
  const fullName = `${values.firstName} ${values.lastName}`;
  // excluding firstName and lastName and adding fullName.
  const { firstName, lastName, ...parsedValues } = values;
  const queryJSON = { fullName, ...parsedValues };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    'Access-Control-Allow-Origin': '*',
    body: JSON.stringify(queryJSON)
  };

  const data = await fetch(`https://localhost:5001/Auth/register`, options);
  const handledResult = await handleResponse(data);

  if (handledResult.error) {
    throw new Error(handledResult.error);
  }
};

export default register;
