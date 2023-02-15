export enum EEmalPasswordForm {
  email = 'email',
  password = 'password',
}

export enum EAuthTypes {
  signin = 'signin',
  signup = 'signup',
}

export interface ILoginControllerProps {
  type: EAuthTypes;
  setType: (value: EAuthTypes) => void;
}

export interface IEmailPasswordForm {
  email: string;
  password: string;
}
