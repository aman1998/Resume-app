import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '@components/Modal';
import {
  EEducationTypes,
  IEducationsInfoStage,
} from '@components/stages/EducationsInfoStage/types';
import UserEducationsInfoStage from '@components/stages/EducationsInfoStage';
import UserInfoLayout from '@components/UserInfoLayout';

import {
  educationsInfoSelector,
  educationsModalIsOpenSelector,
  updateUserInfoFetchingSelector,
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

const UserEducationsInfo: FC = () => {
  const isOpenModal = useSelector(educationsModalIsOpenSelector);
  const educations = useSelector(educationsInfoSelector) || [];
  const userInfoLoading = useSelector(userInfoFetchingSelector);
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

  const closeModal = () => {
    dispatch(changeEducationsModalIsOpen(false));
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
          <Modal isOpen={isOpenModal} onClose={closeModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <UserEducationsInfoStage control={control} errors={errors} />
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
export default UserEducationsInfo;
