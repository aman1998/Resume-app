import { Controller, FieldValues } from 'react-hook-form';

import { IInputControl } from '@components/TextFieldControl/types';

import TextField from '@UI/TextField';

const TextFieldControl = <T extends FieldValues>({
  name,
  labelText,
  control,
  errorMessage,
}: IInputControl<T>): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <TextField
        onChange={onChange}
        value={value}
        label={labelText}
        error={!!errorMessage}
        helperText={errorMessage}
      />
    )}
  />
);

export default TextFieldControl;
