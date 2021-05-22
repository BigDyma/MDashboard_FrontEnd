/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { logout } from './Auth/Login';
import authHeader from "./Helpers/authHeader";

const jwtToken = authHeader();

const api = (): AxiosInstance => {

// create new instance of the axios
const instance = axios.create({
    baseURL: "https://localhost:5001/",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
});

// attach jwt 
instance.interceptors.request.use( (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = jwtToken.Authorization;

    return config;
  });

instance.interceptors.response.use((response:AxiosResponse) => JSON.parse(response.data),
                                    (reason: AxiosError) => {
                                        ([401, 403].indexOf(reason.response!.status) !== -1) && logout();
                                        console.log(reason.response?.status);
                                        return { error: reason.response?.data, statusText: reason.response?.statusText };
                                    });

  return instance;
}

export default api;