export enum EEmailPasswordForm {
  email = 'email',
  password = 'password',
}

export interface IEmailPasswordForm {
  email: string;
  password: string;
}

export interface IUserEmailProps {
  loading: boolean;
  onSubmit: (values: IEmailPasswordForm) => void;
}
