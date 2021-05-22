/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line import/no-cycle
import handleResponse from '../../Helpers/handleRespons';
import { IJWToken, ILogin } from '../../../Models/authModels';
import isLogged from './_isLogged';
import userSubjectBehavior from './_userSubject';
import authHeader from '../../Helpers/authHeader';

export const login = async(values:ILogin):Promise<any> => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      'Access-Control-Allow-Origin': '*',
      body: JSON.stringify(values)
    };
  
    const result = await fetch(`https://localhost:5001/Auth/login`, options);
  
    const handledResult: IJWToken = await handleResponse(result);
  
    if (handledResult.error) {
      console.log(handledResult.statusText);
      throw new Error(handledResult.error);

    }
    if (handledResult.token) {
      console.log(handledResult.token);
      userSubjectBehavior.createUserSubject(handledResult.token);
    }
  }
  
export const logout = async () => {
    if (isLogged()) {
      const requestOptions = { method: 'POST', headers: authHeader() };
      const res = await fetch(`https://localhost:5001/Auth/logout`, requestOptions);
      await handleResponse(res);
      userSubjectBehavior.removeUserSubject();
    }
  }
