import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIntervalYears } from '@utils/date';

import {
  changeEducationsModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';
import {
  educationsInfoSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { getEducationType } from '@utils/resumeUtils';

import { IEducationItemProps } from '../types';

import styles from './item.module.scss';

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
    <div className={styles.item}>
      <div className={styles['item__name']}>{item.educationName}</div>
      <div className={styles['item__type']}>{getEducationType(item.type)}</div>
      <div className={styles['item__faculty']}>{item.faculty}</div>
      <div className={styles['item__date']}>{getIntervalYears(item.startYear, item.endYear)}</div>
      <div className={styles['item__location']}>
        Местоположение: <span>{item.educationLocation}</span>
      </div>
      <div className={styles['item__about']}>{item.aboutEducation}</div>
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
