import { FC, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { auth } from 'firebase-config';

import EmailPasswordForm from '@components/EmailPassordForm';
import { IEmailPasswordForm } from '@components/EmailPassordForm/types';

import { changeAuthModalIsOpen } from '../store/reducers';

const SignIn: FC = () => {
  const [loading, setLoading] = useState(false);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const onSubmit = async ({ email, password }: IEmailPasswordForm) => {
    try {
      setLoading(true);
      const data = await signInWithEmailAndPassword(email, password);
      if (data) {
        push('/profile/personal');
        dispatch(changeAuthModalIsOpen(false));
      }
    } finally {
      setLoading(false);
    }
  };
  return <EmailPasswordForm onSubmit={onSubmit} loading={loading} />;
};

export default SignIn;
