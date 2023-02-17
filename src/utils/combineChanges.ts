import { IPayloadAction, THandler } from 'src/rootStore/types';

type TUtilType<T, S = void> = (state: T, action: IPayloadAction<S>) => T;

export default <T, S = void>(changes: THandler<T, S>[]): TUtilType<T, S> =>
  (curState: T, action: IPayloadAction<S>) =>
    changes.reduce((state, reducer) => reducer(state, action), curState);
