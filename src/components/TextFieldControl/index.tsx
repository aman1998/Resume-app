import { Controller } from 'react-hook-form';
import { FC } from 'react';

import { IInputControlProps } from '@components/TextFieldControl/types';

import TextField from '@UI/TextField';

const TextFieldControl: FC<IInputControlProps> = ({
  name = '',
  labelText,
  control,
  errorMessage,
  type = 'text',
  defaultValue = '',
  ...props
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ field: { value, onChange } }) => (
      <TextField
        {...props}
        value={value}
        onChange={onChange}
        type={type}
        label={labelText}
        error={!!errorMessage}
        helperText={errorMessage}
      />
    )}
  />
);

export default TextFieldControl;
