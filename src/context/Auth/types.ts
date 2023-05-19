export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
}

export interface IContext {
    user: IUser | null;
    login: (key: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}