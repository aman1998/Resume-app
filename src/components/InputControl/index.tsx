import { FieldValues, useController } from 'react-hook-form';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

import { IInputControl } from '@components/InputControl/types';

import Input from '@UI/Input';

const InputControl = <T extends FieldValues>({
  name,
  labelText,
  control,
  errorMessage,
  ...props
}: IInputControl<T>): JSX.Element => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl isInvalid={invalid}>
      {!!labelText && <FormLabel htmlFor={name}>{labelText}</FormLabel>}
      <Input id={name} value={value} onChange={onChange} onBlur={onBlur} {...props} />
      {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputControl;
