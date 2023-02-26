import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import UserExperiencesStage from '@components/Stages/ExperiencesStage';
import Modal from '@components/Modal';
import { IExperiencesInfoStage } from '@components/Stages/ExperiencesStage/types';

import { generateUUID } from '@common/constants/date';
import UserInfoProvider from '@common/providers/UserInfoProvider';

import {
  experiencesInfoSelector,
  experiencesModalIsOpenSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';
import {
  changeExperiencesModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { experiencesSchema } from './validations';

const UserExperiencesInfo: FC = () => {
  const isOpenModal = useSelector(experiencesModalIsOpenSelector);
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

  const deleteExperience = (id: string) => {
    const newExperiences = experiences.filter((item) => item.id !== id);
    dispatch(
      updateUserInfoFetching({
        experiences: [...newExperiences],
      })
    );
  };

  const openModal = (id: string) => {
    const experienceInfo = experiences.find((item) => item.id === id);
    reset({ ...experienceInfo });
    dispatch(changeExperiencesModalIsOpen(true));
  };

  const closeModal = () => {
    dispatch(changeExperiencesModalIsOpen(false));
    reset();
  };

  return (
    <UserInfoProvider>
      <section>
        {experiences.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'grid',
              flexDirection: 'column',
              gridGap: '10px',
              border: '1px solid black',
            }}
          >
            <div>cpmpanyName: {item.companyName}</div>
            <div>profession: {item.profession}</div>
            <div>companyLocation: {item.companyLocation}</div>
            <div>startMonth: {item.startMonth}</div>
            <div>startYear: {item.startYear}</div>
            <div>endMonth: {item.endMonth}</div>
            <div>endYear: {item.endYear}</div>
            <div>aboutWork: {item.aboutWork}</div>
            <Button onClick={() => openModal(item.id)} text="Изменить" />
            <Button
              onClick={() => deleteExperience(item.id)}
              text="Удалить"
              loading={!!loading}
              color="error"
            />
          </div>
        ))}
        <Button
          text="Добавить"
          onClick={() => dispatch(changeExperiencesModalIsOpen(true))}
          variant="contained"
          style={{ marginTop: 16, width: 120 }}
        />
        <Modal isOpen={isOpenModal} onClose={closeModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UserExperiencesStage control={control} errors={errors} />
            <Button
              text="Сохранить"
              type="submit"
              loading={!!loading}
              variant="contained"
              style={{ marginTop: 16, width: 120 }}
            />
          </form>
        </Modal>
      </section>
    </UserInfoProvider>
  );
};
export default UserExperiencesInfo;
