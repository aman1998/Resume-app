import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import ContactsInfoStage from '@components/Stages/ContactsInfoStage';

import { updateUserInfoFetching, userInfoFetching } from '@modules/UserInfo/store/reducers';
import {
  updateUserInfoFetchingSelector,
  userInfoSelector,
  isAuthSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { contactsSchema } from './validations';

const UserContactsInfo: FC = () => {
  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IContactsInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(contactsSchema),
  });

  useEffect(() => {
    reset({
      email: user?.email,
      phone: user?.phone,
      messenger: user?.messenger,
      site: user?.site,
    });
  }, [user, reset]);

  useEffect(() => {
    if (!user && isAuth) dispatch(userInfoFetching());
  }, [dispatch, user, isAuth]);

  const onSubmit = async (values: IContactsInfoStage) => {
    dispatch(updateUserInfoFetching(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContactsInfoStage control={control} errors={errors} />
      <Button type="submit" text="Сохранить" loading={updateUserLoading} />
    </form>
  );
};

export default UserContactsInfo;
