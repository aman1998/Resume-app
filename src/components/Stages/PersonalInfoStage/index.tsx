import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';
import SelectControl from '@components/SelectControl';
import InputFileControl from '@components/InputFileControl';

import { TPersonalInfoProps } from './types';
import { options } from './constants';

const PersonalInfoStage: FC<TPersonalInfoProps> = ({ control, errors, setValue }) => {
  const handleResetFile = () => {
    setValue('file', null);
    setValue('photoUrl', '');
  };

  return (
    <div style={{ display: 'grid', flexDirection: 'column', gridGap: '10px' }}>
      <InputFileControl
        handleResetFile={handleResetFile}
        control={control}
        name="file"
        errorMessage={errors?.file?.message}
      />
      <TextFieldControl
        labelText="Имя"
        control={control}
        name="firstname"
        placeholder="Имя"
        errorMessage={errors?.firstname?.message}
      />
      <TextFieldControl
        labelText="Фамилия"
        control={control}
        name="lastname"
        placeholder="Фамилия"
        errorMessage={errors?.lastname?.message}
      />
      <TextFieldControl
        labelText="Отчество"
        control={control}
        name="surname"
        placeholder="Отчество"
        errorMessage={errors?.surname?.message}
      />
      <SelectControl control={control} name="gender" options={options} label="Пол" />
      <TextFieldControl
        labelText="Дата рождения"
        control={control}
        type="date"
        name="birthday"
        errorMessage={errors?.birthday?.message}
        InputLabelProps={{ shrink: true }}
      />
      <TextFieldControl
        labelText="Гражданство"
        control={control}
        name="nationality"
        errorMessage={errors?.nationality?.message}
        placeholder="Гражданство"
      />
      <TextFieldControl
        labelText="Местоположение"
        placeholder="Местоположение"
        control={control}
        errorMessage={errors?.location?.message}
        name="location"
      />
      <TextFieldControl
        labelText="Про себя"
        placeholder="Про себя"
        control={control}
        errorMessage={errors?.aboutme?.message}
        name="aboutme"
        multiline
        rows={4}
      />
    </div>
  );
};

export default PersonalInfoStage;
