import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@UI/Button';

import { EAuthTypes } from '../../types';
import { changeAuthType } from '../../store/reducers';

import styles from './text.module.scss';

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
          <p className={styles.text}>
            Нет аккаунта?{' '}
            <Button variant="text" text="Регистрация" onClick={handleForm} className={styles.btn} />
          </p>
        );
      case EAuthTypes.signup:
        return (
          <p className={styles.text}>
            Есть аккаунт?{' '}
            <Button
              variant="text"
              text="Вход в аккаунт"
              className={styles.btn}
              onClick={handleForm}
            />
          </p>
        );
      default:
        return <></>;
    }
  };

  return getText();
};

export default AuthFormText;
