import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@UI/Button';

import { EAuthTypes } from '../../types';
import { changeAuthType } from '../../store/reducers';

const AuthFormText: FC<{ type: string }> = ({ type }) => {
  const dispatch = useDispatch();

  const handleForm = () => {
    const newType = type === EAuthTypes.signin ? EAuthTypes.signup : EAuthTypes.signin;
    dispatch(changeAuthType(newType));
  };

  const getText = () => {
    switch (type) {
      case EAuthTypes.signin:
        return (
          <p>
            Нет аккаунта? <Button variant="text" text="Регистрация" onClick={handleForm} />
          </p>
        );
      case EAuthTypes.signup:
        return (
          <p>
            Есть аккаунт? <Button variant="text" text="Вход в аккаунт" onClick={handleForm} />
          </p>
        );
      default:
        return <></>;
    }
  };

  return getText();
};

export default AuthFormText;
