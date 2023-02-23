import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import PersonalInfoStage from '@components/Stages/PersonalInfoStage';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';

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
      firstname: user?.personal.firstname,
      lastname: user?.personal.lastname,
      surname: user?.personal.surname,
      gender: user?.personal.gender || 'male',
      birthday: user?.personal.birthday,
      location: user?.personal.location,
      aboutme: user?.personal.aboutme,
    });
  }, [user, reset]);

  useEffect(() => {
    if (!user && isAuth) dispatch(userInfoFetching());
  }, [dispatch, user, isAuth]);

  const onSubmit = async (values: IPersonalInfoStage) => {
    dispatch(updateUserInfoFetching({ personal: values }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfoStage control={control} errors={errors} />
      <Button type="submit" text="Сохранить" loading={updateUserLoading} />
    </form>
  );
};

export default UserPersonalInfo;
