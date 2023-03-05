import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dynamic from 'next/dynamic';

import { IExperiencesInfoStage } from '@components/stages/ExperiencesStage/types';
import UserInfoLayout from '@components/UserInfoLayout';

import {
  experiencesInfoSelector,
  userInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';
import {
  changeExperiencesModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { generateUUID } from '@utils/date';

import { experiencesSchema } from './validations';
import ExperienceItem from './components/ExperienceItem';
import UserExperienceSkeleton from './components/Skeleton';

const DynamicAddFormModal = dynamic(() => import('./components/AddFormModal'), {
  ssr: false,
});

const UserExperiencesInfo: FC = () => {
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const experiences = useSelector(experiencesInfoSelector) || [];

  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IExperiencesInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(experiencesSchema),
  });

  const onSubmit = (values: IExperiencesInfoStage) => {
    const newExperiences = experiences.filter((item) => item.id !== values.id);

    dispatch(
      updateUserInfoFetching({
        experiences: [...newExperiences, { ...values, id: generateUUID() }],
      })
    );
  };

  const openModal = () => {
    reset({});
    dispatch(changeExperiencesModalIsOpen(true));
  };

  return (
    <UserInfoLayout
      title="Опыт работы"
      getButton={() => <Button text="Добавить" variant="text" onClick={openModal} />}
    >
      {userInfoLoading ? (
        <UserExperienceSkeleton />
      ) : (
        <section>
          {experiences.map((item) => (
            <ExperienceItem key={item.id} item={item} reset={reset} />
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
export default UserExperiencesInfo;
