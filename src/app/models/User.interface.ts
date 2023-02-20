export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export interface User {
    username: string;
    password: string
}

export interface UserRegisterI {
    name: string;
    email: string;
    password: string,
    perfil: 'visitante' | 'admin'
}

export interface UserResponse {
    message: string;
    token: string;
    userId: string,
    role: string
}