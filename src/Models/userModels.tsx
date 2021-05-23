export interface IUserResponse {
    FullName: string;
    UserName: string;
    Email: string;
    Phone: string;
    DOB: Date;
}

export interface IUserUpdate {
    Id?: number;
    UserName: string;
    Password: string;
}