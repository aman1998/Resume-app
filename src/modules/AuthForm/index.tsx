import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';

import Button from '@UI/Button';

import { authModalIsOpenSelector, authTypeSelector } from './store/selectors';
import { changeAuthModalIsOpen, changeAuthType } from './store/reducers';
import SignIn from './components/SignIn';
import { EAuthTypes } from './types';
import SignUp from './components/SignUp';

const AuthForm: FC = () => {
  const isOpenModal = useSelector(authModalIsOpenSelector);
  const authType = useSelector(authTypeSelector);

  const dispatch = useDispatch();

  const handleForm = () => {
    const newType = authType === EAuthTypes.signin ? EAuthTypes.signup : EAuthTypes.signin;
    dispatch(changeAuthType(newType));
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={() => dispatch(changeAuthModalIsOpen(false))}
      title={authType === EAuthTypes.signup ? 'Регистрация' : 'Авторизация'}
    >
      {authType === EAuthTypes.signin ? <SignIn /> : <SignUp />}
      <Button
        text={authType === EAuthTypes.signin ? 'Регистрация' : 'Авторизация'}
        onClick={handleForm}
      />
    </Modal>
  );
};
export default AuthForm;
