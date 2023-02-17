import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AddIcon } from '@chakra-ui/icons';

import Seo from '@components/SEO';

import AuthForm from '@modules/AuthForm';
import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';
import { isAuthSelector } from '@modules/AuthForm/store/selectors';

import Button from '@UI/Button';

const Home: FC = () => {
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleAddClick = () => {
    if (isAuth) push('/profile');
    else dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <>
      <Seo seoTitle="Resume" />
      <Button leftIcon={<AddIcon />} text="Добавить" onClick={handleAddClick} />
      <AuthForm />
    </>
  );
};

export default Home;
