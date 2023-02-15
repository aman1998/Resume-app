import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import InputControl from '@components/InputControl';

import {
  EAuthTypes,
  EEmalPasswordForm,
  IEmailPasswordForm,
  ILoginControllerProps,
} from '@modules/AuthForm/types';
import { schema } from '@modules/AuthForm/validations';

import Button from '@UI/Button';

import { signInFetching, signUpFetching } from '../store/reducers';

const LoginController: FC<ILoginControllerProps> = ({ type, setType }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IEmailPasswordForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const text = type === EAuthTypes.signup ? 'Авторизация' : 'Регистрация';
  const newType = type === EAuthTypes.signin ? EAuthTypes.signup : EAuthTypes.signin;

  const onSubmit = (data: IEmailPasswordForm) => {
    if (type === EAuthTypes.signin) dispatch(signInFetching(data));
    if (type === EAuthTypes.signup) dispatch(signUpFetching(data));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputControl<IEmailPasswordForm>
        name={EEmalPasswordForm.email}
        labelText="Email"
        control={control}
        errorMessage={(errors.email ? errors.email.message : '') as string}
      />

      <InputControl<IEmailPasswordForm>
        name={EEmalPasswordForm.password}
        labelText="Password"
        control={control}
        errorMessage={(errors.password ? errors.password.message : '') as string}
      />

      <Button type="submit" isDisabled={!isValid} text="Сохранить" />
      <Button text={text} onClick={() => setType(newType)} />
    </form>
  );
};
export default LoginController;
