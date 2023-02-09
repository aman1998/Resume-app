type TActionReturnType<T> = {
  type: string;
  payload?: T;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type TUtilType<T extends object | boolean = never> = (payload?: T) => TActionReturnType<T>;
// eslint-disable-next-line @typescript-eslint/ban-types
export const createAction =
  <T extends object | boolean = never>(actionType: string): TUtilType<T> =>
  (payload: any) => ({
    // need refactoring any
    type: actionType,
    payload,
  });
