import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '@components/Modal';
import { IEducationsInfoStage } from '@components/Stages/EducationsInfoStage/types';
import UserEducationsInfoStage from '@components/Stages/EducationsInfoStage';

import { generateUUID } from '@common/constants/date';
import UserInfoProvider from '@common/providers/UserInfoProvider';

import {
  educationsInfoSelector,
  educationsModalIsOpenSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';
import {
  changeEducationsModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { educationsSchema } from './validations';

const UserEducationsInfo: FC = () => {
  const isOpenModal = useSelector(educationsModalIsOpenSelector);
  const educations = useSelector(educationsInfoSelector) || [];
  const loading = useSelector(updateUserInfoFetchingSelector);

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

  const deleteExperience = (id: string) => {
    const newEducations = educations.filter((item) => item.id !== id);
    dispatch(
      updateUserInfoFetching({
        educations: [...newEducations],
      })
    );
  };

  const openModal = (id: string) => {
    const experienceInfo = educations.find((item) => item.id === id);
    reset({ ...experienceInfo });
    dispatch(changeEducationsModalIsOpen(true));
  };

  const closeModal = () => {
    dispatch(changeEducationsModalIsOpen(false));
    reset();
  };

  return (
    <UserInfoProvider>
      <section>
        {educations.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'grid',
              flexDirection: 'column',
              gridGap: '10px',
              border: '1px solid black',
            }}
          >
            <div>type: {item.type}</div>
            <div>educationName: {item.educationName}</div>
            <div>faculty: {item.faculty}</div>
            <div>educationLocation: {item.educationLocation}</div>
            <div>startMonth: {item.startMonth}</div>
            <div>startYear: {item.startYear}</div>
            <div>endMonth: {item.endMonth}</div>
            <div>endYear: {item.endYear}</div>
            <div>aboutEducation: {item.aboutEducation}</div>
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
          onClick={() => dispatch(changeEducationsModalIsOpen(true))}
          variant="contained"
          style={{ marginTop: 16, width: 120 }}
        />
        <Modal isOpen={isOpenModal} onClose={closeModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UserEducationsInfoStage control={control} errors={errors} />
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
    </UserInfoProvider>
  );
};
export default UserEducationsInfo;
