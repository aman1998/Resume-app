import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import PersonalInfoStage from '@components/PersonalInfoStage';
import { IPersonalInfoStage } from '@components/PersonalInfoStage/types';

import Button from '@UI/Button';

import { userSchema } from './validations';

const UserPersonalInfo: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IPersonalInfoStage>({
    mode: 'onChange',
    resolver: yupResolver(userSchema),
    defaultValues: {
      firstname: 'Aman',
      lastname: 'Myrzabekov',
      gender: 'female',
      birthday: '1998-05-17',
      location: 'Bishkek',
      aboutme: 'фанат Милана',
    },
  });

  const onSubmit = (values: IPersonalInfoStage) => {
    console.warn('values', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfoStage control={control} errors={errors} />
      <Button type="submit" text="Сохранить" />
    </form>
  );
};

export default UserPersonalInfo;
