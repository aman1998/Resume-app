import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';
import TextListControl from '@components/TextListControl';

import { monthSelectOptions, yearsSelectOptions } from '@common/constants/date';

import { TExperiencesInfoStageProps } from './types';
import styles from './experiences.module.scss';

const UserExperiencesStage: FC<TExperiencesInfoStageProps> = ({ control, errors }) => (
  <div className={styles.experiences}>
    <h1 className={styles['experiences__title']}>Опыт работы</h1>
    <TextFieldControl
      control={control}
      errorMessage={errors?.companyName?.message}
      name="companyName"
      placeholder="Название компании"
      labelText="Название компании"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.profession?.message}
      name="profession"
      placeholder="Должность"
      labelText="Должность"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.companyLocation?.message}
      name="companyLocation"
      placeholder="Местоположение компании"
      labelText="Местоположение компании"
    />
    <div className={styles['experiences__label']}>Начало работы</div>
    <div className={styles['experiences__dates']}>
      <SelectControl
        control={control}
        name="startMonth"
        options={monthSelectOptions}
        className={styles['experiences__select']}
        errorMessage={errors?.startMonth?.message}
      />
      <SelectControl
        control={control}
        name="startYear"
        options={yearsSelectOptions}
        className={styles['experiences__select']}
        errorMessage={errors?.startYear?.message}
      />
    </div>
    <div className={styles['experiences__label']}>Окончание</div>
    <div className={styles['experiences__dates']}>
      <SelectControl
        control={control}
        name="endMonth"
        options={monthSelectOptions}
        className={styles['experiences__select']}
        errorMessage={errors?.endMonth?.message}
      />
      <SelectControl
        control={control}
        name="endYear"
        options={yearsSelectOptions}
        className={styles['experiences__select']}
        errorMessage={errors?.endYear?.message}
      />
    </div>
    <div className={styles['experiences__label']}>Навыки</div>
    <TextListControl control={control} name="skills" errorMessage={errors?.skills?.message} />
    <TextFieldControl
      multiline={true}
      rows={4}
      control={control}
      errorMessage={errors?.aboutWork?.message}
      name="aboutWork"
      labelText="Раскажите про работу"
      placeholder="Раскажите про работу"
    />
  </div>
);
export default UserExperiencesStage;
