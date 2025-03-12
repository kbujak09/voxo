export type UserType = {
    id: string;
    username: string;
}

export type AuthContextType = {
    user: UserType | null;
    loading: boolean;
    isAuthenticated: boolean | null;
    checkAuth: () => Promise<void>;
}