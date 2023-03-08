import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';
import UserEducationsInfoStage from '@components/stages/EducationsInfoStage';

import {
  educationsModalIsOpenSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';
import { changeEducationsModalIsOpen } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

import { IAddFormModalProps } from './types';

const AddFormModal: FC<IAddFormModalProps> = ({ control, errors, onSubmit }) => {
  const isOpenModal = useSelector(educationsModalIsOpenSelector);
  const loading = useSelector(updateUserInfoFetchingSelector);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(changeEducationsModalIsOpen(false));
  };

  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <form onSubmit={onSubmit}>
        <UserEducationsInfoStage control={control} errors={errors} />
        <Button
          text="Сохранить"
          type="submit"
          disabled={!!loading}
          variant="contained"
          style={{ marginTop: 16, width: 'max-content' }}
        />
      </form>
    </Modal>
  );
};

export default AddFormModal;
