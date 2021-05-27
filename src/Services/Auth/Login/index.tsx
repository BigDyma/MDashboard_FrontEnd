/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/ban-types */
import { AxiosError, AxiosResponse } from 'axios';
import { IJWToken, ILogin } from '../../../Models/authModels';
import isLogged from './_isLogged';
import userSubjectBehavior from './_userSubject';
import authHeader from '../../Helpers/authHeader';
import api from '../../axios-config';
import { throwCustomException } from '../../Helpers/throwCustomException';

export const logout = async () => {
  // const res = await api().post(`/Auth/logout`);
  userSubjectBehavior.removeUserSubject();
  // window.location.reload();
};

export const login = async (values: ILogin): Promise<any> => {
  const result = await api().post<IJWToken>(`/Auth/login`, values);

  throwCustomException(result);

  const { token } = (result as IJWToken) || '';

  userSubjectBehavior.createUserSubject(token as string);
};
