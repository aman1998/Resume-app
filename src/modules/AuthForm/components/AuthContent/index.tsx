import { FC } from 'react';
import { useSelector } from 'react-redux';

import { authTypeSelector } from '@modules/AuthForm/store/selectors';
import { EAuthTypes } from '@modules/AuthForm/types';

import ResetEmailPassword from '../ResetEmailPassword';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const AuthContent: FC = () => {
  const authType = useSelector(authTypeSelector);

  if (authType === EAuthTypes.reset) {
    return <ResetEmailPassword />;
  }

  if (authType === EAuthTypes.signup) {
    return <SignUp />;
  }

  return <SignIn />;
};

export default AuthContent;
