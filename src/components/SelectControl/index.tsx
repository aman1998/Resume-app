import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import { ISelectControlProps } from './types';

const SelectControl: FC<ISelectControlProps> = ({ name = '', control, options, errorMessage }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <FormControl error={!!errorMessage}>
        <Select onChange={onChange} value={value || ''}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    )}
  />
);

export default SelectControl;
