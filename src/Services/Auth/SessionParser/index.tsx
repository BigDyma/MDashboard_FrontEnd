import authHeader from '../../Helpers/authHeader';

const UserIdClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
const UserNameClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
const AuthenticationMethodClaim = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/authenticationmethod';
const RolesClaim = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

const jwtToken = authHeader().Authorization;

const parseJWT = (param: string):string => JSON.parse(atob(jwtToken.split('.')[1]))[param];


export const getUserName = ():string => parseJWT(UserNameClaim);

export const getUserId = ():number => parseInt(parseJWT(UserIdClaim), 15);

export const getAuthMethod = ():string => parseJWT(AuthenticationMethodClaim);

export const getRoles = ():string => parseJWT(RolesClaim);

export const getRawToken = ():string => jwtToken;

export const isAdmin = ():boolean => getRoles().indexOf("Admin") > -1;

export const isUser = ():boolean => getRoles().indexOf("User") > -1;