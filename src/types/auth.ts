import { Dispatch, SetStateAction } from "react";

export type UserType = {
  _id: string;
  username: string;
}

export type AuthContextType = {
  user: UserType | null;
  loading: boolean;
  isAuthenticated: boolean | null;
  checkAuth: () => Promise<void>;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}