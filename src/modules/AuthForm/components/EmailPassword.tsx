import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormHelperText, Input } from '@chakra-ui/react';
import { FC } from 'react';

import { schema } from '@modules/AuthForm/validations';
import { IEmailPasswordForm } from '@modules/AuthForm/types';

const LoginController: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IEmailPasswordForm>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IEmailPasswordForm) => {
    console.warn(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <Input {...register('email')} placeholder="Email" />
        <FormHelperText>{errors.email && errors.email.message}</FormHelperText>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <Input {...register('password')} type="password" placeholder="Password" />
        <FormHelperText>{errors.password && errors.password.message}</FormHelperText>
      </FormControl>

      <Button type="submit" isDisabled={!isValid}>
        Sign in
      </Button>
    </form>
  );
};
export default LoginController;
