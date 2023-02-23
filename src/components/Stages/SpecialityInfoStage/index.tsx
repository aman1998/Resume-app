import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';
import CheckboxControl from '@components/CheckboxControl';

import { optionsCurrency } from './constants';
import { TSpecialityInfoStageProps } from './types';

const SpecialityInfoStage: FC<TSpecialityInfoStageProps> = ({ control, errors }) => (
  <div style={{ display: 'grid', flexDirection: 'column', gridGap: '10px' }}>
    <TextFieldControl
      control={control}
      errorMessage={errors?.profession?.message}
      name="profession"
      labelText="Профессия"
    />
    <TextFieldControl
      control={control}
      type="number"
      errorMessage={errors?.salary?.message}
      name="salary"
      labelText="Зарплата"
    />
    <SelectControl control={control} name="salaryСurrency" options={optionsCurrency} />
    <CheckboxControl control={control} name="relocatioReady" labelText="Готов к переезду" />
    <CheckboxControl
      control={control}
      name="remoteWorkingReady"
      labelText="Готов к удаленной работе"
    />
  </div>
);

export default SpecialityInfoStage;
