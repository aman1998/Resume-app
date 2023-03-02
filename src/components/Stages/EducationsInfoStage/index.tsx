import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';

import { yearsSelectOptions } from '@common/constants/date';

import { TEducationsInfoStageProps } from './types';
import { educationTypeOptions } from './constants';
import styles from './educations.module.scss';

const UserEducationsInfoStage: FC<TEducationsInfoStageProps> = ({ control, errors }) => (
  <div className={styles.educations}>
    <h1 className={styles['educations__title']}>Образование</h1>
    <div className={styles['educations__label']}>Тип</div>
    <SelectControl
      control={control}
      name="type"
      options={educationTypeOptions}
      errorMessage={errors?.type?.message}
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.educationName?.message}
      name="educationName"
      placeholder="Название учебного заведение"
      labelText="Название учебного заведение"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.faculty?.message}
      name="faculty"
      placeholder="Факультет"
      labelText="Факультет"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.educationLocation?.message}
      name="educationLocation"
      placeholder="Местоположение"
      labelText="Местоположение"
    />
    <div className={styles['educations__label']}>Годы обучения</div>
    <div className={styles['educations__dates']}>
      <SelectControl
        control={control}
        name="startYear"
        options={yearsSelectOptions}
        className={styles['educations__select']}
        errorMessage={errors?.startYear?.message}
      />
      <SelectControl
        control={control}
        name="endYear"
        options={yearsSelectOptions}
        className={styles['educations__select']}
      />
    </div>
    <div className={styles['educations__dates']}></div>
    <TextFieldControl
      multiline={true}
      rows={4}
      control={control}
      errorMessage={errors?.aboutEducation?.message}
      name="aboutEducation"
      placeholder="Раскажите про учебу"
      labelText="Раскажите про учебу"
    />
  </div>
);
export default UserEducationsInfoStage;
