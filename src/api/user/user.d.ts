import { User } from "../../assets/types/user";
export declare const loginUser: (data: Omit<User, "username">) => Promise<unknown>;
export declare const registerUser: (data: User) => Promise<unknown>;
export declare const logOutUser: () => Promise<unknown>;
