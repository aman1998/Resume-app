import { FC } from 'react';

import styles from './info.module.scss';
import TemplatePersonalInfo from './components/PersonalInfo';
import TemplateExperiencesInfo from './components/ExperiencesInfo';
import TemplateEducationsInfo from './components/EducationsInfo';
import TemplateAboutInfo from './components/AboutInfo';

const Info: FC<{ withColors: boolean }> = ({ withColors }) => (
  <div className={styles['info']}>
    <TemplatePersonalInfo withColors={withColors} />
    <TemplateExperiencesInfo withColors={withColors} />
    <TemplateEducationsInfo withColors={withColors} />
    <TemplateAboutInfo withColors={withColors} />
  </div>
);

export default Info;
