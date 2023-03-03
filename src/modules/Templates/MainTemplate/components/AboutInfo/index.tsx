import { FC } from 'react';
import { useSelector } from 'react-redux';

import InfoHeader from '@modules/Templates/MainTemplate/components/InfoHeader';
import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

const TemplateAboutInfo: FC<{ withColors: boolean }> = ({ withColors }) => {
  const info = useSelector(personalInfoSelector);

  return (
    <div>
      <InfoHeader title="О себе" withColors={withColors} />
      <p>{info?.aboutme}</p>
    </div>
  );
};

export default TemplateAboutInfo;
