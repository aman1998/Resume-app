import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Skeleton } from '@mui/material';

import UserExperiencesStage from '@components/Stages/ExperiencesStage';
import Modal from '@components/Modal';
import { IExperiencesInfoStage } from '@components/Stages/ExperiencesStage/types';
import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import { generateUUID } from '@common/constants/date';

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

import { experiencesSchema } from './validations';
import ExperienceItem from './components/ExperienceItem';

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
    reset();
  };

  return (
    <UserInfoLayout
      title="Опыт работы"
      getButton={() => (
        <Button
          text="Добавить"
          variant="text"
          onClick={() => dispatch(changeExperiencesModalIsOpen(true))}
        />
      )}
    >
      {userInfoLoading ? (
        <Skeleton variant="rectangular" width="100%" height="80vh" />
      ) : (
        <section>
          {[...experiences]
            .sort((a, b) => Number(b.startYear) - Number(a.startYear))
            .map((item) => (
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
                style={{ marginTop: 16, width: 120 }}
              />
            </form>
          </Modal>
        </section>
      )}
    </UserInfoLayout>
  );
};
export default UserExperiencesInfo;
