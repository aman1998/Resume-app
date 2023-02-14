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
    formState: { errors },
  } = useForm<IEmailPasswordForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IEmailPasswordForm) => {
    console.warn(data);
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

      <Button type="submit">Sign in</Button>
    </form>
  );
};
export default LoginController;
