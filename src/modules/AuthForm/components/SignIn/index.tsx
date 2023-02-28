import { FC, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { auth } from 'firebase-config';

import TextFieldControl from '@components/TextFieldControl';

import { changeIsAuth, authInfoSuccess } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { changeAuthModalIsOpen } from '../../store/reducers';

import { TSignIn } from './types';
import { signInSchema } from './validations';
import styles from './styles.module.scss';

const SignIn: FC = () => {
  const [loading, setLoading] = useState(false);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSignIn>({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async ({ email, password }: TSignIn) => {
    try {
      setLoading(true);
      const data = await signInWithEmailAndPassword(email, password);
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
        margin="normal"
        errorMessage={errors?.email?.message}
        className={styles['form__field']}
      />

      <TextFieldControl
        name="password"
        labelText="Пароль"
        placeholder="Пароль"
        type="password"
        control={control}
        margin="dense"
        errorMessage={errors?.password?.message}
        className={styles['form__field']}
      />

      <Button
        type="submit"
        disabled={loading}
        loading={loading}
        variant="contained"
        className={styles['form__button']}
        text="Войти"
      />
    </form>
  );
};

export default SignIn;
