import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Image from 'next/image';

import favicon from 'public/android-chrome-96x96.png';

import Modal from '@components/Modal';

import { authModalIsOpenSelector, authTypeSelector } from './store/selectors';
import { changeAuthModalIsOpen } from './store/reducers';
import SignIn from './components/SignIn';
import { EAuthTypes } from './types';
import SignUp from './components/SignUp';
import styles from './styles.module.scss';
import AuthFormText from './components/AuthFormText';
import { getTitle } from './utils';
import ResetEmailPassword from './components/ResetEmailPassword';

const AuthForm: FC = () => {
  const isOpenModal = useSelector(authModalIsOpenSelector);
  const authType = useSelector(authTypeSelector);

  const signInRef = useRef<HTMLInputElement>(null);
  const signUpRef = useRef<HTMLInputElement>(null);
  const nodeRef = authType === EAuthTypes.signin ? signInRef : signUpRef;

  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpenModal} onClose={() => dispatch(changeAuthModalIsOpen(false))}>
      <SwitchTransition>
        <CSSTransition
          key={authType}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            if (nodeRef.current) nodeRef.current.addEventListener('transitionend', done, false);
          }}
          classNames="fade"
        >
          <div className={styles['auth-form']} ref={nodeRef}>
            <div className={styles['auth-form__logo']}>
              {<Image alt="icon" src={favicon.src} width={50} height={50} />}
            </div>
            <h1 className={styles['auth-form__title']}>{getTitle(authType)}</h1>
            {authType === EAuthTypes.signin ? (
              <SignIn />
            ) : authType === EAuthTypes.signup ? (
              <SignUp />
            ) : (
              <ResetEmailPassword />
            )}
            <AuthFormText type={authType} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Modal>
  );
};
export default AuthForm;
