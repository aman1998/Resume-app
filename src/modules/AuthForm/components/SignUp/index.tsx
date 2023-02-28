import { FC, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { auth } from 'firebase-config';

import TextFieldControl from '@components/TextFieldControl';

import { authInfoSuccess, changeIsAuth } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { changeAuthModalIsOpen } from '../../store/reducers';

import { ISignUp } from './types';
import { signUpSchema } from './validations';
import styles from './styles.module.scss';

const SignUp: FC = () => {
  const [loading, setLoading] = useState(false);

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignUp>({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async ({ email, password }: ISignUp) => {
    try {
      setLoading(true);
      const data = await createUserWithEmailAndPassword(email, password);
      if (data) {
        dispatch(changeIsAuth(true));
        push('/profile/personal');
        dispatch(changeAuthModalIsOpen(false));
        dispatch(authInfoSuccess({ id: data.user.uid, email: data.user.email || '' }));
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextFieldControl
        name="email"
        labelText="Почта"
        placeholder="Почта"
        control={control}
        autoComplete="off"
        className={styles['form__field']}
        errorMessage={errors?.email?.message}
      />

      <TextFieldControl
        name="password"
        labelText="Пароль"
        placeholder="Пароль"
        type="password"
        control={control}
        autoComplete="off"
        className={styles['form__field']}
        errorMessage={errors?.password?.message}
      />

      <TextFieldControl
        name="confirm_password"
        labelText="Подтвердите пароль"
        placeholder="Подтвердите пароль"
        type="password"
        control={control}
        className={styles['form__field']}
        errorMessage={errors?.confirm_password?.message}
      />

      <Button
        type="submit"
        disabled={loading}
        variant="contained"
        loading={loading}
        className={styles['form__button']}
        text="Регистрация"
      />
    </form>
  );
};

export default SignUp;
