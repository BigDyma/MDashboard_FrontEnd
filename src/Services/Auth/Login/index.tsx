/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/ban-types */
import { AxiosError, AxiosResponse } from 'axios';
import { IJWToken, ILogin } from '../../../Models/authModels';
import isLogged from './_isLogged';
import userSubjectBehavior from './_userSubject';
import authHeader from '../../Helpers/authHeader';
import api from '../../axios-config';
import {throwCustomException} from '../../Helpers/throwCustomException';

export const logout = async () => {
  if (isLogged()) {
    const res = await api().post(`/Auth/logout`);
    userSubjectBehavior.removeUserSubject();
    window.location.reload();
  }
}

export const login = async(values:ILogin):Promise<any> => {

    const result = await api().post(`/Auth/login`, values);
    throwCustomException(result);
    
  }
  

