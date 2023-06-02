export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
}

export interface ISubscription {
    plan: string;
    end: string;
    active: boolean;
}

export interface IContext {
    user: IUser | null;
    subscription: ISubscription | null;
    login: (key: string) => Promise<void>;
    logout: () => void;
    key: string | null;
}

export interface IAuthProvider {
    children: JSX.Element;
}