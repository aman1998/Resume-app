import { FC } from 'react';
import { useSelector } from 'react-redux';

import InfoHeader from '@modules/Templates/MainTemplate/components/InfoHeader';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

const TemplateAboutInfo: FC = () => {
  const info = useSelector(personalInfoSelector);

  return (
    <div>
      <InfoHeader title="О себе" />
      <p>{info?.aboutme}</p>
    </div>
  );
};

export default TemplateAboutInfo;
