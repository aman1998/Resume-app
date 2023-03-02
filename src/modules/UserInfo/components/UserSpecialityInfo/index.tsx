import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import SpecialityInfoStage from '@components/stages/SpecialityInfoStage';
import { ECurrency, ISpecialityInfoStage } from '@components/stages/SpecialityInfoStage/types';
import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import {
  updateUserInfoFetchingSelector,
  userInfoFetchingSelector,
  userInfoSelector,
} from '@modules/UserInfo/store/selectors';
import { updateUserInfoFetching } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import UserSpecialitySkeleton from './components/Skeleton';
import { specialitySchema } from './validations';

const UserSpecialityInfo: FC = () => {
  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const user = useSelector(userInfoSelector);

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
      profession: user?.speciality?.profession,
      salary: user?.speciality?.salary,
      salaryСurrency: user?.speciality?.salaryСurrency || ECurrency.dollar,
      relocatioReady: !!user?.speciality?.relocatioReady,
      remoteWorkingReady: !!user?.speciality?.remoteWorkingReady,
      skills: user?.speciality?.skills || [],
    });
  }, [user, reset]);

  const onSubmit = async (values: ISpecialityInfoStage) => {
    dispatch(updateUserInfoFetching({ speciality: values }));
  };

  return (
    <UserInfoLayout title="Специальность">
      {userInfoLoading ? (
        <UserSpecialitySkeleton />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <SpecialityInfoStage control={control} errors={errors} />
          <Button
            text="Сохранить"
            type="submit"
            loading={updateUserLoading}
            disabled={updateUserLoading}
            variant="contained"
            style={{ marginTop: 16, width: 120 }}
          />
        </form>
      )}
    </UserInfoLayout>
  );
};

export default UserSpecialityInfo;
