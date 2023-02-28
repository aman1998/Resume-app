import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import ContactsInfoStage from '@components/Stages/ContactsInfoStage';
import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import { updateUserInfoFetching } from '@modules/UserInfo/store/reducers';
import {
  updateUserInfoFetchingSelector,
  userInfoFetchingSelector,
  userInfoSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import UserContactsSceleton from './components/Skeleton';
import { contactsSchema } from './validations';

const UserContactsInfo: FC = () => {
  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const user = useSelector(userInfoSelector);

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
      email: user?.contacts?.email,
      phone: user?.contacts?.phone,
      messenger: user?.contacts?.messenger,
      site: user?.contacts?.site,
    });
  }, [user, reset]);

  const onSubmit = async (values: IContactsInfoStage) => {
    dispatch(updateUserInfoFetching({ contacts: values }));
  };

  return (
    <UserInfoLayout title="Контакты">
      {userInfoLoading ? (
        <UserContactsSceleton />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactsInfoStage control={control} errors={errors} />
          <Button
            type="submit"
            text="Сохранить"
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

export default UserContactsInfo;
