import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import PersonalInfoStage from '@components/stages/PersonalInfoStage';
import { IPersonalInfoStage } from '@components/stages/PersonalInfoStage/types';
import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import { updateUserInfoFetching } from '@modules/UserInfo/store/reducers';
import {
  updateUserInfoFetchingSelector,
  userInfoFetchingSelector,
  userInfoSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import UserPersonalSkeleton from './components/Skeleton';
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
    getValues,
    setValue,
  } = useForm<IPersonalInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(userSchema),
  });
  useEffect(() => {
    reset({
      firstname: user?.personal?.firstname,
      lastname: user?.personal?.lastname,
      surname: user?.personal?.surname,
      gender: user?.personal?.gender || 'male',
      birthday: user?.personal?.birthday,
      location: user?.personal?.location,
      aboutme: user?.personal?.aboutme,
      photoUrl: user?.personal?.photoUrl || '',
    });
  }, [user, reset]);

  const handleResetFile = () => {
    setValue('file', null);
    setValue('photoUrl', '');
  };

  const onSubmit = async (values: IPersonalInfoStage) => {
    // need move to saga effects in future
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
          <PersonalInfoStage control={control} errors={errors} handleResetFile={handleResetFile} />
          <Button
            type="submit"
            text="Сохранить"
            disabled={updateUserLoading || loading}
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
