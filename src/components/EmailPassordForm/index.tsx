import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';

import InputControl from '@components/TextFieldControl';

import { schema } from '@modules/AuthForm/validations';

import Button from '@UI/Button';

import { EEmailPasswordForm, IEmailPasswordForm, IUserEmailProps } from './types';

const EmailPasswordForm: FC<IUserEmailProps> = ({ loading, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEmailPasswordForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputControl
        name={EEmailPasswordForm.email}
        labelText="Email"
        control={control}
        errorMessage={errors?.email?.message}
      />

      <InputControl
        name={EEmailPasswordForm.password}
        labelText="Password"
        control={control}
        errorMessage={errors?.password?.message}
      />

      <Button type="submit" disabled={loading} text="Сохранить" />
    </form>
  );
};
export default EmailPasswordForm;
