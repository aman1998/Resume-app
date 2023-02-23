import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText, InputLabel } from '@mui/material';

import Input from '@UI/Input';

import { TInputControlProps } from './types';

const InputControl: FC<TInputControlProps> = ({ name = '', control, errorMessage, labelText }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <>
        {labelText && <InputLabel htmlFor="default-input">{labelText}</InputLabel>}
        <Input id="default-input" onChange={onChange} value={value} error={!!errorMessage} />
        {errorMessage && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
      </>
    )}
  />
);

export default InputControl;
