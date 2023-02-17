import { TRequestHandler } from 'src/rootStore/types';

export interface IUserInfo {
  email: string;
}

export interface IUserState {
  userInfo: TRequestHandler<IUserInfo>;
}
