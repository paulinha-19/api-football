export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
}

export interface IContext {
    user: IUser | null;
    login: (key: string) => Promise<void>;
    logout: () => void;
    key: string | null;
}

export interface IAuthProvider {
    children: JSX.Element;
}