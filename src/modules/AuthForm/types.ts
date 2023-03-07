export enum EAuthTypes {
  signin = 'signin',
  signup = 'signup',
}

export interface ILoginControllerProps {
  type: EAuthTypes;
  setType: (value: EAuthTypes) => void;
}
