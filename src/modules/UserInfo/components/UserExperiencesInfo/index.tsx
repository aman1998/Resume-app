import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import UserExperiencesStage from '@components/stages/ExperiencesStage';
import Modal from '@components/Modal';
import { IExperiencesInfoStage } from '@components/stages/ExperiencesStage/types';
import UserInfoLayout from '@components/UserInfoLayout';

import {
  experiencesInfoSelector,
  experiencesModalIsOpenSelector,
  updateUserInfoFetchingSelector,
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

const UserExperiencesInfo: FC = () => {
  const isOpenModal = useSelector(experiencesModalIsOpenSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const experiences = useSelector(experiencesInfoSelector) || [];
  const loading = useSelector(updateUserInfoFetchingSelector);

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

  const closeModal = () => {
    dispatch(changeExperiencesModalIsOpen(false));
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
          <Modal isOpen={isOpenModal} onClose={closeModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <UserExperiencesStage control={control} errors={errors} />
              <Button
                text="Сохранить"
                type="submit"
                loading={!!loading}
                disabled={!!loading}
                variant="contained"
                style={{ marginTop: 16, width: 'max-content' }}
              />
            </form>
          </Modal>
        </section>
      )}
    </UserInfoLayout>
  );
};
export default UserExperiencesInfo;
