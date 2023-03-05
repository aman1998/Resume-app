import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';
import UserExperiencesStage from '@components/stages/ExperiencesStage';

import {
  experiencesModalIsOpenSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';
import { changeExperiencesModalIsOpen } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { IAddFormModalProps } from './types';

const AddFormModal: FC<IAddFormModalProps> = ({ control, errors, onSubmit }) => {
  const isOpenModal = useSelector(experiencesModalIsOpenSelector);
  const loading = useSelector(updateUserInfoFetchingSelector);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(changeExperiencesModalIsOpen(false));
  };

  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <form onSubmit={onSubmit}>
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
  );
};

export default AddFormModal;
