import { IJWToken } from '../../Models/authModels';
import userSubjectBehavior from '../Auth/Login/_userSubject';
import IErrorResponse from '../../Models/errorModels';

export const throwCustomException = (handledResult: IJWToken): void => {
  if (handledResult.error) {
    console.log(handledResult.statusText, ' throw ');
    throw new Error(handledResult.error);
  }
};

export const throwIfError = (handledResult: IErrorResponse): void => {
  if (handledResult?.error) {
    throw new Error(handledResult.error);
  }
};
