import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';

import { sitename } from '@common/constants/app';

import { authModalIsOpenSelector, authTypeSelector } from './store/selectors';
import { changeAuthModalIsOpen } from './store/reducers';
import SignIn from './components/SignIn';
import { EAuthTypes } from './types';
import SignUp from './components/SignUp';
import styles from './styles.module.scss';
import AuthFormText from './components/AuthFormText';

const AuthForm: FC = () => {
  const isOpenModal = useSelector(authModalIsOpenSelector);
  const authType = useSelector(authTypeSelector);

  const dispatch = useDispatch();

  const getTitle = () => {
    switch (authType) {
      case EAuthTypes.signin:
        return 'Вход в аккаунт';
      case EAuthTypes.signup:
        return 'Регистрация';
      default:
        return '';
    }
  };

  return (
    <Modal isOpen={isOpenModal} onClose={() => dispatch(changeAuthModalIsOpen(false))}>
      <div className={styles['auth-form']}>
        <div className={styles['auth-form__logo']}>{sitename}</div>
        <h1 className={styles['auth-form__title']}>{getTitle()}</h1>
        {authType === EAuthTypes.signin ? <SignIn /> : <SignUp />}
        <AuthFormText type={authType} />
        <div></div>
      </div>
    </Modal>
  );
};
export default AuthForm;
