import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dynamic from 'next/dynamic';

import {
  EEducationTypes,
  IEducationsInfoStage,
} from '@components/stages/EducationsInfoStage/types';
import UserInfoLayout from '@components/UserInfoLayout';

import {
  educationsInfoSelector,
  userInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';
import {
  changeEducationsModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { generateUUID } from '@utils/date';

import UserEducationSkeleton from './components/Skeleton';
import { educationsSchema } from './validations';
import EducationItem from './components/EducationItem';

const DynamicAddFormModal = dynamic(() => import('./components/AddFormModal'));

const UserEducationsInfo: FC = () => {
  const educations = useSelector(educationsInfoSelector) || [];
  const userInfoLoading = useSelector(userInfoFetchingSelector);

  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IEducationsInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(educationsSchema),
  });

  const onSubmit = (values: IEducationsInfoStage) => {
    const newEducations = educations.filter((item) => item.id !== values.id);

    dispatch(
      updateUserInfoFetching({
        educations: [...newEducations, { ...values, id: generateUUID() }],
      })
    );
  };

  const openModal = () => {
    reset({ type: EEducationTypes.higher });
    dispatch(changeEducationsModalIsOpen(true));
  };

  return (
    <UserInfoLayout
      title="Образование"
      getButton={() => (
        <Button
          text="Добавить"
          onClick={openModal}
          style={{ marginTop: 16, width: 'max-content' }}
        />
      )}
    >
      {userInfoLoading ? (
        <UserEducationSkeleton />
      ) : (
        <section>
          {educations.map((item) => (
            <EducationItem key={item.id} item={item} reset={reset} />
          ))}
          <DynamicAddFormModal
            onSubmit={handleSubmit(onSubmit)}
            control={control}
            errors={errors}
          />
        </section>
      )}
    </UserInfoLayout>
  );
};
export default UserEducationsInfo;
