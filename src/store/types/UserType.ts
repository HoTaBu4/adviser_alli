export interface UserState {
  user: User;
}

export interface User {
  name: string;
  email: string;
  isGuest: boolean;
}
