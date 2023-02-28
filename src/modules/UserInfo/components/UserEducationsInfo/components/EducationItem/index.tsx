import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeEducationsModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';
import {
  educationsInfoSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { IEducationItemProps } from '../types';

const EducationItem: FC<IEducationItemProps> = ({ item, reset }) => {
  const educations = useSelector(educationsInfoSelector) || [];
  const loading = useSelector(updateUserInfoFetchingSelector);

  const dispatch = useDispatch();

  const deleteEducation = (id: string) => {
    const newEducations = educations.filter((item) => item.id !== id);
    dispatch(
      updateUserInfoFetching({
        educations: [...newEducations],
      })
    );
  };

  const openModal = (id: string) => {
    const educationsInfo = educations.find((item) => item.id === id);
    reset({ ...educationsInfo });
    dispatch(changeEducationsModalIsOpen(true));
  };

  return (
    <div
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
        onClick={() => deleteEducation(item.id)}
        text="Удалить"
        loading={!!loading}
        disabled={!!loading}
        color="error"
      />
    </div>
  );
};

export default EducationItem;
