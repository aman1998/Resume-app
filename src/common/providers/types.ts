import { User } from 'firebase/auth';

export type TUserContext = User | null | undefined;

export interface IUserContext {
  user: TUserContext;
}
