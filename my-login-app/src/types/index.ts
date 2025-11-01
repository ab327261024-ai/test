export interface User {
    id: string;
    username: string;
    email: string;
}

export interface AuthToken {
    token: string;
    expiresIn: number;
}

export interface LoginCredentials {
    username: string;
    password: string;
}