import { IPayloadAction, THandlers, THandler } from 'src/rootStore/types';

import combineChanges from './combineChanges';

const applyHandler = <T, S = never>(
  handlers: THandlers<T, S>,
  action: IPayloadAction<S>,
  state: T
): T =>
  handlers.hasOwnProperty(action.type)
    ? Array.isArray(handlers[action.type])
      ? combineChanges<T, S>(handlers[action.type] as THandler<T, S>[])(state, action)
      : (handlers[action.type] as THandler<T, S>)(state, action)
    : state;

export default <T, S = never>(initialState: T, handlers: THandlers<T, S>) =>
  (state = initialState, action: IPayloadAction<S>): T =>
    applyHandler<T, S>(handlers, action, state);
