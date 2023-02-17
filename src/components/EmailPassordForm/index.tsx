import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';

import InputControl from '@components/InputControl';

import { schema } from '@modules/AuthForm/validations';

import Button from '@UI/Button';

import { EEmailPasswordForm, IEmailPasswordForm, IUserEmailProps } from './types';

const EmailPasswordForm: FC<IUserEmailProps> = ({ loading, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IEmailPasswordForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputControl<IEmailPasswordForm>
        name={EEmailPasswordForm.email}
        labelText="Email"
        control={control}
        errorMessage={(errors.email ? errors.email.message : '') as string}
      />

      <InputControl<IEmailPasswordForm>
        name={EEmailPasswordForm.password}
        labelText="Password"
        control={control}
        errorMessage={(errors.password ? errors.password.message : '') as string}
      />

      <Button type="submit" isDisabled={!isValid} isLoading={loading} text="Сохранить" />
    </form>
  );
};
export default EmailPasswordForm;
