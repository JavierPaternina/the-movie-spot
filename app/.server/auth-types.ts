

export type User = {
  id: string; 
  email: string;
  username: string;
  password: string;
};
export interface TAuthErrors {
  email?: string;
  password?: string;
  repeatPassword?: string;
  general?: string;
}

export type UserSessionData = Omit<User, 'password' | 'username'>;