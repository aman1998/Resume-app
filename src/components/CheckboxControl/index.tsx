import { FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import Checkbox from '@UI/Checkbox';

import { TCheckboxControlProps } from './types';

const CheckboxControl: FC<TCheckboxControlProps> = ({
  name = '',
  control,
  labelText,
  defaultValue = '',
  ...props
}) => (
  <Controller
    control={control}
    name={name}
    defaultValue={defaultValue}
    render={({ field: { onChange, value } }) => (
      <FormControlLabel
        style={{width: 'max-content'}}
        control={
          <Checkbox
            {...props}
            defaultValue={defaultValue}
            checked={value}
            onChange={onChange}
            value={value}
          />
        }
        label={labelText}
      />
    )}
  />
);
export default CheckboxControl;
