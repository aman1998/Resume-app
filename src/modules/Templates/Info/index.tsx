import { FC } from 'react';
import { useSelector } from 'react-redux';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

import { getFullName } from '@utils/resumeUtils';

import styles from './info.module.scss';
import TemplatePersonalInfo from './components/PersonalInfo';
import TemplateExperiencesInfo from './components/ExperiencesInfo';
import TemplateEducationsInfo from './components/EducationsInfo';
import TemplateAboutInfo from './components/AboutInfo';

const Info: FC<{ withColors: boolean }> = ({ withColors }) => {
  const info = useSelector(personalInfoSelector);

  return (
    <div className={styles['info']}>
      <div className={styles['info__fullname']}>
        {getFullName(info?.lastname, info?.firstname, info?.surname)}
      </div>
      <TemplatePersonalInfo withColors={withColors} />
      <TemplateExperiencesInfo withColors={withColors} />
      <TemplateEducationsInfo withColors={withColors} />
      <TemplateAboutInfo withColors={withColors} />
    </div>
  );
};

export default Info;
