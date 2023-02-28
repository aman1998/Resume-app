import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';
import CheckboxControl from '@components/CheckboxControl';
import TextListControl from '@components/TextListControl';

import { optionsCurrency } from './constants';
import { TSpecialityInfoStageProps } from './types';
import styles from './speciality.module.scss';

const SpecialityInfoStage: FC<TSpecialityInfoStageProps> = ({ control, errors }) => (
  <div className={styles.speciality}>
    <TextFieldControl
      control={control}
      errorMessage={errors?.profession?.message}
      name="profession"
      labelText="Профессия"
    />
    <div>
      <TextFieldControl
        control={control}
        type="number"
        errorMessage={errors?.salary?.message}
        name="salary"
        labelText="Зарплата"
      />
      <SelectControl
        control={control}
        name="salaryСurrency"
        options={optionsCurrency}
        className={styles['speciality__currency']}
      />
    </div>
    <TextListControl
      control={control}
      name="skills"
      labelText="Технологии"
      errorMessage={errors?.skills?.message}
    />
    <CheckboxControl control={control} name="relocatioReady" labelText="Готов к переезду" />
    <CheckboxControl
      control={control}
      name="remoteWorkingReady"
      labelText="Готов к удаленной работе"
    />
  </div>
);

export default SpecialityInfoStage;
