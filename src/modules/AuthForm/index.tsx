import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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

  const signInRef = useRef<HTMLInputElement>(null);
  const signUpRef = useRef<HTMLInputElement>(null);
  const nodeRef = authType === EAuthTypes.signin ? signInRef : signUpRef;

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
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={authType}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            if (nodeRef.current) nodeRef.current.addEventListener('transitionend', done, false);
          }}
          classNames="fade"
        >
          <div className={styles['auth-form']}>
            <div className={styles['auth-form__logo']}>{sitename.toUpperCase()}</div>
            <h1 className={styles['auth-form__title']}>{getTitle()}</h1>
            <div ref={nodeRef}>{authType === EAuthTypes.signin ? <SignIn /> : <SignUp />}</div>
            <AuthFormText type={authType} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Modal>
  );
};
export default AuthForm;
