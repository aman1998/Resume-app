import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';

import InputFileControl from '@components/InputFileControl';

import { TPersonalInfoProps } from './types';
import { options } from './constants';

const PersonalInfoStage: FC<TPersonalInfoProps> = ({ control, errors }) => (
  <div style={{ display: 'grid', flexDirection: 'column', gridGap: '10px' }}>
    <InputFileControl control={control} name="file" />
    <TextFieldControl
      labelText="Имя"
      control={control}
      name="firstname"
      errorMessage={errors?.firstname?.message}
    />
    <TextFieldControl
      labelText="Фамилия"
      control={control}
      name="lastname"
      errorMessage={errors?.lastname?.message}
    />
    <TextFieldControl
      labelText="Отчество"
      control={control}
      name="surname"
      errorMessage={errors?.surname?.message}
    />
    <SelectControl control={control} name="gender" label="Пол" options={options} />
    <TextFieldControl
      labelText="Дата рождения"
      control={control}
      type="date"
      name="birthday"
      errorMessage={errors?.birthday?.message}
    />
    <TextFieldControl labelText="Местоположение" control={control} name="location" />
    <TextFieldControl labelText="Про себя" control={control} name="aboutme" multiline rows={4} />
  </div>
);

export default PersonalInfoStage;
