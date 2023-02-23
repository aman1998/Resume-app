import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';

import { monthSelectOptions, yearsSelectOptions } from '@common/constants/date';

import { TExperiencesInfoStageProps } from './types';

const UserExperiencesStage: FC<TExperiencesInfoStageProps> = ({ control, errors }) => (
  <div style={{ display: 'grid', flexDirection: 'column', gridGap: '10px', padding: '10px' }}>
    <TextFieldControl
      control={control}
      errorMessage={errors?.companyName?.message}
      name="companyName"
      labelText="Название компании"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.profession?.message}
      name="profession"
      labelText="Должность"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.companyLocation?.message}
      name="companyLocation"
      labelText="Местоположение компании"
    />
    <SelectControl
      control={control}
      name="startMonth"
      options={monthSelectOptions}
      errorMessage={errors?.startMonth?.message}
    />
    <SelectControl
      control={control}
      name="startYear"
      options={yearsSelectOptions}
      errorMessage={errors?.startYear?.message}
    />
    <SelectControl control={control} name="endMonth" options={monthSelectOptions} />
    <SelectControl control={control} name="endYear" options={yearsSelectOptions} />
    <TextFieldControl
      multiline={true}
      rows={4}
      control={control}
      errorMessage={errors?.aboutWork?.message}
      name="aboutWork"
      labelText="Раскажите про работу"
    />
  </div>
);
export default UserExperiencesStage;
