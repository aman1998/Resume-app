import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';

import { monthSelectOptions, yearsSelectOptions } from '@common/constants/date';

import { TExperiencesInfoStageProps } from './types';
import { educationTypeOptions } from './constants';

const UserEducationsInfoStage: FC<TExperiencesInfoStageProps> = ({ control, errors }) => (
  <div style={{ display: 'grid', flexDirection: 'column', gridGap: '10px', padding: '10px' }}>
    <SelectControl control={control} name="type" options={educationTypeOptions} />
    <TextFieldControl
      control={control}
      errorMessage={errors?.educationName?.message}
      name="educationName"
      labelText="Название учебного заведение"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.faculty?.message}
      name="faculty"
      labelText="Факультет"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.educationLocation?.message}
      name="educationLocation"
      labelText="Местоположение"
    />
    <SelectControl control={control} name="startMonth" options={monthSelectOptions} />
    <SelectControl control={control} name="startYear" options={yearsSelectOptions} />
    <SelectControl control={control} name="endMonth" options={monthSelectOptions} />
    <SelectControl control={control} name="endYear" options={yearsSelectOptions} />
    <TextFieldControl
      multiline={true}
      rows={4}
      control={control}
      errorMessage={errors?.aboutEducation?.message}
      name="aboutEducation"
      labelText="Раскажите про учебу"
    />
  </div>
);
export default UserEducationsInfoStage;
