import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import PersonalInfoStage from '@components/Stages/PersonalInfoStage';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';
import UserPersonalSkeleton from '@components/Skeletons/UserPersonalSkeleton';
import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import { updateUserInfoFetching } from '@modules/UserInfo/store/reducers';
import {
  updateUserInfoFetchingSelector,
  userInfoFetchingSelector,
  userInfoSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { userSchema } from './validations';

const UserPersonalInfo: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const user = useSelector(userInfoSelector);

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
      photoUrl: user?.personal.photoUrl || '',
    });
  }, [user, reset]);

  const onSubmit = async (values: IPersonalInfoStage) => {
    // need move to saga effects
    const { file, ...others } = values;
    if (file) {
      setLoading(true);
      const storage = getStorage();
      const storageRef = ref(storage, `${user?.id}-images/avatar`); // file.name
      await uploadBytes(storageRef, file);
      const photoUrl = await getDownloadURL(storageRef);
      setLoading(false);
      dispatch(updateUserInfoFetching({ personal: { ...others, photoUrl } }));
    } else {
      dispatch(updateUserInfoFetching({ personal: others }));
    }
  };

  return (
    <UserInfoLayout title="Личная информация">
      {userInfoLoading ? (
        <UserPersonalSkeleton />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonalInfoStage control={control} errors={errors} />
          <Button
            type="submit"
            text="Сохранить"
            loading={updateUserLoading || loading}
            variant="contained"
            style={{ marginTop: 16, width: 120 }}
          />
        </form>
      )}
    </UserInfoLayout>
  );
};

export default UserPersonalInfo;
