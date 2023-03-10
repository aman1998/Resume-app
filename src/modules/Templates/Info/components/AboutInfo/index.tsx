import { FC } from 'react';
import { useSelector } from 'react-redux';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

import InfoHeader from '../InfoHeader';

const TemplateAboutInfo: FC<{ withColors: boolean }> = ({ withColors }) => {
  const info = useSelector(personalInfoSelector);

  return (
    <div>
      <InfoHeader title="О себе" withColors={withColors} />
      <p style={{ marginLeft: 10 }}>{info?.aboutme}</p>
    </div>
  );
};

export default TemplateAboutInfo;
