import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import PersonalInfoStage from '@components/PersonalInfoStage';
import { IPersonalInfoStage } from '@components/PersonalInfoStage/types';

import { userSchema } from './validations';

const UserPersonalInfo: FC = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<IPersonalInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(userSchema),
    defaultValues: {
      firstname: 'Aman',
      lastname: 'Myrzabekov',
    },
  });

  const onSubmit = () => 2 + 2;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfoStage control={control} errors={errors} />
    </form>
  );
};

export default UserPersonalInfo;
