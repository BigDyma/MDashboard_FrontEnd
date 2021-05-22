/* eslint-disable @typescript-eslint/ban-types */
import { BehaviorSubject } from 'rxjs';
// eslint-disable-next-line import/no-cycle
import handleResponse from '../Helpers/handleRespons';
import { IJWToken } from '../../Models/authModels';

const userSubjectParse = (): string =>
  localStorage.getItem('currentUser') || '{}';

const currentUserSubject = new BehaviorSubject(JSON.parse(userSubjectParse()));

export const login = async (values: {
  userName: string;
  password: string;
}): Promise<any> => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    'Access-Control-Allow-Origin': '*',
    body: JSON.stringify(values)
  };

  const result = await fetch(`https://localhost:5001/Auth/login`, options);

  const handledResult: IJWToken = await handleResponse(result);

  if (handledResult.error) {
    throw new Error(handledResult.error);
  }
  if (handledResult.token) {
    console.log(handledResult.token);
    localStorage.setItem('token', JSON.stringify(handledResult.token));
    currentUserSubject.next(handledResult.token);
  }
};

export const isLogged = () =>{
  const currentUser = currentUserSubject.value;
  console.log (currentUserSubject.value.token);
  return (currentUser && currentUser.token !== undefined);
}


const authHeader = () => {
  // return authorization header with jwt token
  const currentUser = currentUserSubject.value;
  if (isLogged()) {
    return { Authorization: `Bearer ${currentUser.token}` };
  }
  return { Authorization: '' };
};

export const logout = async () => {
  if (isLogged()) {
    const requestOptions = { method: 'POST', headers: authHeader() };
    const res = await fetch(`https://localhost:5001/Auth/logout`, requestOptions);
    await handleResponse(res);
    localStorage.removeItem('token');
    currentUserSubject.next(null);
  }
};

export default {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};
