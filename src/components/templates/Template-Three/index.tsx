import { FC } from 'react';

import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import TemplateHeader from './components/TemplateHeader';
import styles from './template-three.module.scss';
import TemplateEducation from './components/TemplateEducation';
import TemplateExperience from './components/TemplateExperiance';
import TemplateSkills from './components/TemplateSkills';
import TemplateAboutMe from './components/TemplateAboutMe';
import TemplateBirdthday from './components/TemplateBirdthday';
import TemplateGender from './components/TemplateGender';
import TemplateSalary from './components/TemplateSalary';
import TemplatePhone from './components/TemplatesPhone';

const TemplateThree: FC = () => (
  <UserInfoLayout>
    <section className={styles.template}>
      <TemplateHeader />
      <TemplateAboutMe />
      <TemplateGender />
      <TemplateBirdthday />
      <TemplateEducation />
      <TemplateSalary />
      <TemplateExperience />
      <TemplateSkills />
      <TemplatePhone />
    </section>
  </UserInfoLayout>
);

export default TemplateThree;
