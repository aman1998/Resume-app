import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { ISelectControlProps } from './types';

const SelectControl: FC<ISelectControlProps> = ({ name = '', control, options }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <Select onChange={onChange} value={value || ''}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    )}
  />
);

export default SelectControl;
