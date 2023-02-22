import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import PersonalInfoStage from '@components/PersonalInfoStage';
import { IPersonalInfoStage } from '@components/PersonalInfoStage/types';

import { updateUserInfoFetching, userInfoFetching } from '@modules/UserInfo/store/reducers';
import {
  updateUserInfoFetchingSelector,
  userInfoSelector,
  isAuthSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { userSchema } from './validations';

const UserPersonalInfo: FC = () => {
  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IPersonalInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    reset({
      firstname: user?.firstname,
      lastname: user?.lastname,
      surname: user?.surname,
      gender: user?.gender || 'male',
      birthday: user?.birthday,
      location: user?.location,
      aboutme: user?.aboutme,
    });
  }, [user, reset]);

  useEffect(() => {
    if (!user && isAuth) dispatch(userInfoFetching());
  }, [dispatch, user, isAuth]);

  const onSubmit = async (values: IPersonalInfoStage) => {
    dispatch(updateUserInfoFetching(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfoStage control={control} errors={errors} />
      <Button type="submit" text="Сохранить" loading={updateUserLoading} />
    </form>
  );
};

export default UserPersonalInfo;
