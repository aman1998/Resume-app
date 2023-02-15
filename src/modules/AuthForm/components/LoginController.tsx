import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormHelperText, Input } from '@chakra-ui/react';
import { FC } from 'react';

import InputControl from '@components/InputControl';

import { schema } from '@modules/AuthForm/validations';
import { EEmalPasswordForm, IEmailPasswordForm } from '@modules/AuthForm/types';

const LoginController: FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IEmailPasswordForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IEmailPasswordForm) => {
    console.warn(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputControl
        name={EEmalPasswordForm.email}
        labelText="Email"
        control={control}
        errorMessage={(errors.email ? errors.email.message : '') as string}
      />

      <InputControl
        name={EEmalPasswordForm.password}
        labelText="Password"
        control={control}
        errorMessage={(errors.password ? errors.password.message : '') as string}
      />

      <Button type="submit" isDisabled={!isValid}>
        Sign in
      </Button>
    </form>
  );
};
export default LoginController;
