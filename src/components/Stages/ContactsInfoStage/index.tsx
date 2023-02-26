import { FC } from 'react';

import TextFieldControl from '@components/TextFieldControl';

import { TContactInfoStageProps } from './types';

const ContactsInfoStage: FC<TContactInfoStageProps> = ({ errors, control }) => (
  <div style={{ display: 'grid', flexDirection: 'column', gridGap: '10px' }}>
    <TextFieldControl
      control={control}
      errorMessage={errors?.phone?.message}
      name="phone"
      labelText="Телефон"
      placeholder="Телефон"
    />
    <TextFieldControl
      control={control}
      type="email"
      errorMessage={errors?.email?.message}
      name="email"
      labelText="Почта"
      placeholder="Почта"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.messenger?.message}
      name="messenger"
      labelText="Мессенджер"
      placeholder="Мессенджер"
    />
    <TextFieldControl
      control={control}
      errorMessage={errors?.site?.message}
      name="site"
      labelText="Сайт"
      placeholder="Сайт"
    />
  </div>
);
export default ContactsInfoStage;
