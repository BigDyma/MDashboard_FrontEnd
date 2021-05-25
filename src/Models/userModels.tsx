export interface IUserResponse {
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  dob?: Date;
}

export interface IUserUpdate {
  Id?: number;
  UserName: string;
  Password: string;
}
