import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';

import LoginController from './components/LoginController';
import { authModalIsOpenSelector } from './store/selectors';
import { changeAuthModalIsOpen } from './store/reducers';

const AuthForm: FC = () => {
  const isOpenModal = useSelector(authModalIsOpenSelector);

  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpenModal} onClose={() => dispatch(changeAuthModalIsOpen(false))}>
      <LoginController />
    </Modal>
  );
};
export default AuthForm;
