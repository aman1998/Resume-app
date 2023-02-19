import { FC } from 'react';

import InputControl from '@components/TextFieldControl';

import { IPersonalStageProps } from './types';

const PersonalInfoStage: FC<IPersonalStageProps> = ({ control, errors }) => (
  <>
    <InputControl
      labelText="Имя"
      control={control}
      name="firstname"
      errorMessage={errors?.firstname?.message}
    />
    <InputControl
      labelText="Фамилия"
      control={control}
      name="lastname"
      errorMessage={errors?.lastname?.message}
    />
  </>
);

export default PersonalInfoStage;
