import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';

import LoginController from './components/LoginController';
import { authModalIsOpenSelector } from './store/selectors';
import { changeAuthModalIsOpen } from './store/reducers';
import { EAuthTypes } from './types';

const AuthForm: FC = () => {
  const [type, setType] = useState(EAuthTypes.signin);

  const isOpenModal = useSelector(authModalIsOpenSelector);

  const dispatch = useDispatch();

  const text = type === EAuthTypes.signin ? 'Авторизация' : 'Регистрация';

  return (
    <Modal isOpen={isOpenModal} onClose={() => dispatch(changeAuthModalIsOpen(false))} title={text}>
      <LoginController type={type} setType={setType} />
    </Modal>
  );
};
export default AuthForm;
