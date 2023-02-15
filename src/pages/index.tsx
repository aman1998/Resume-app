import { FC } from 'react';
import { useDispatch } from 'react-redux';

import AuthForm from '@modules/AuthForm';
import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';

import Button from '@UI/Button';

const Home: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button text="open" onClick={() => dispatch(changeAuthModalIsOpen(true))} />
      <AuthForm />
    </>
  );
};

export default Home;
