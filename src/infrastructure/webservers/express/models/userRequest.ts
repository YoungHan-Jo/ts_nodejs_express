export type UserSignupRequestType = {
    name: string;
    email: string;
    password: string;
}

export type UserUpdateRequestType = {
    name: string;
    email: string;
    password: string;
    newPassword: string;
}

export type UserDeleteRequestType = {
    password: string;
}