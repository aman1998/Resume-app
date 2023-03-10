import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import {
  changeExperiencesModalIsOpen,
  updateUserInfoFetching,
} from '@modules/UserInfo/store/reducers';
import {
  experiencesInfoSelector,
  updateUserInfoFetchingSelector,
} from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { getIntervalDates } from '@utils/date';

import { IExperienceItemProps } from '../types';

import styles from './item.module.scss';

const ExperienceItem: FC<IExperienceItemProps> = memo(({ item, reset }) => {
  const experiences = useSelector(experiencesInfoSelector) || [];
  const loading = useSelector(updateUserInfoFetchingSelector);

  const dispatch = useDispatch();

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

  return (
    <div className={styles.item}>
      <div className={styles['item__company-name']}>{item.companyName}</div>
      <div className={styles['item__profession']}>{item.profession}</div>
      <div className={styles['item__date']}>
        {getIntervalDates(item.startMonth, item.startYear, item.endMonth, item.endYear)}
      </div>
      <div className={styles['item__company-location']}>
        Местоположение: <span>{item.companyLocation}</span>
      </div>
      <div className={styles['item__about']}>{item.aboutWork}</div>
      {!!item.skills.length && (
        <div className={styles['item__skills']}>
          {item.skills.map((skill) => (
            <Chip key={skill.text} label={skill.text} />
          ))}
        </div>
      )}
      <Button onClick={() => openModal(item.id)} text="Изменить" />
      <Button
        onClick={() => deleteExperience(item.id)}
        text="Удалить"
        disabled={!!loading}
        color="error"
      />
    </div>
  );
});

export default ExperienceItem;
