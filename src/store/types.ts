import { RecordOf } from 'immutable';
import { Task } from 'redux-saga';
import { Store } from 'redux';

import { IAuthState } from './../modules/AuthForm/store/types';

export interface IWithSagaTaskStore extends Store {
  sagaTask?: Task;
  initialState?: IAppState;
}

export interface IAppState {
  auth: IAuthState;
}

export type TRequestHandler<T> = {
  fetching: boolean;
  data: T[];
  failure: unknown;
};

export declare type IPayloadAction<P = void, T extends string = string, M = never, E = never> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? Record<string, unknown>
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? Record<string, unknown>
    : {
        error: E;
      });

export declare type THandler<T, S = void> = (state: T, action: IPayloadAction<S>) => T;
export declare type THandlers<T, S = void> = {
  [action: string]: THandler<T, S> | THandler<T, S>[];
};

export type TRecordOf<T extends object> = RecordOf<T>;
