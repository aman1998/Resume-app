import { useController } from 'react-hook-form';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { FC } from 'react';

import { IInputControl } from '@components/types';

import { EEmalPasswordForm, IEmailPasswordForm } from '@modules/AuthForm/types';

import Input from '@UI/Input';

const InputControl: FC<IInputControl<IEmailPasswordForm, EEmalPasswordForm>> = ({
  name,
  labelText,
  control,
  errorMessage,
  ...props
}) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid },
  } = useController({
    name,
    control,
    defaultValue: '',
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
