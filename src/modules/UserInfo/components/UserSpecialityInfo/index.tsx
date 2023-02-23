import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import SpecialityInfoStage from '@components/Stages/SpecialityInfoStage';
import { ECurrency, ISpecialityInfoStage } from '@components/Stages/SpecialityInfoStage/types';

import {
  isAuthSelector,
  updateUserInfoFetchingSelector,
  userInfoSelector,
} from '@modules/UserInfo/store/selectors';
import { updateUserInfoFetching, userInfoFetching } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { specialitySchema } from './validations';

const UserSpecialityInfo: FC = () => {
  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ISpecialityInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(specialitySchema),
    defaultValues: {
      salaryСurrency: ECurrency.dollar,
      relocatioReady: true,
      remoteWorkingReady: false,
    },
  });

  useEffect(() => {
    reset({
      profession: user?.speciality.profession,
      salary: user?.speciality.salary,
      salaryСurrency: user?.speciality.salaryСurrency || ECurrency.dollar,
      relocatioReady: !!user?.speciality.relocatioReady,
      remoteWorkingReady: !!user?.speciality.remoteWorkingReady,
    });
  }, [user, reset]);

  useEffect(() => {
    if (!user && isAuth) dispatch(userInfoFetching());
  }, [dispatch, user, isAuth]);

  const onSubmit = async (values: ISpecialityInfoStage) => {
    dispatch(updateUserInfoFetching({ speciality: values }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SpecialityInfoStage control={control} errors={errors} />
      <Button text="Сохранить" type="submit" loading={updateUserLoading} />
    </form>
  );
};

export default UserSpecialityInfo;
