

export type User = {
  id: string; 
  email: string;
  username: string;
  password: string;
};

export type UserSessionData = Omit<User, 'password' | 'username'>;