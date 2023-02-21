import { FC } from 'react';
import { Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';

import Select from '@UI/Select';

import { ISelectControlProps } from './types';

const SelectControl: FC<ISelectControlProps> = ({
  name = '',
  control,
  options,
  errorMessage,
  defaultValue = '',
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value } }) => (
      <FormControl error={!!errorMessage}>
        <InputLabel id="simple-select-error-label">Age</InputLabel>
        <Select
          {...props}
          value={value}
          onChange={onChange}
          labelId="simple-select-error-label"
          id="simple-select-error"
          label="age"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    )}
  />
);

export default SelectControl;
