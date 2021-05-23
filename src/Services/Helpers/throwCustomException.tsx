import { IJWToken } from "../../Models/authModels";
import userSubjectBehavior from '../Auth/Login/_userSubject';
import IErrorResponse from '../../Models/errorModels';

export const throwCustomException = (handledResult: IJWToken):void  => {
    if (handledResult.error) {
      console.log(handledResult.statusText);
      throw new Error(handledResult.error);
    }
    if (handledResult.token) {
      console.log(handledResult.token);
      userSubjectBehavior.createUserSubject(handledResult.token);
    }
}

export const throwIfError = (handledResult: IErrorResponse):void =>{
    if (handledResult?.error) {
        throw new Error(handledResult.error);
      }
}