import { FC, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useSelector } from 'react-redux';

import UserInfoLayout from '@components/UserInfoLayout';

import { userInfoFetchingSelector } from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import TemplateHeader from './components/TemplateHeader';
import styles from './base-template.module.scss';
import TemplateEducation from './components/TemplateEducation';
import TemplateExperience from './components/TemplateExperiance';
import TemplateSkills from './components/TemplateSkills';
import TemplateAboutMe from './components/TemplateAboutMe';
import TemplateBirdthday from './components/TemplateBirdthday';
import TemplateGender from './components/TemplateGender';
import TemplateSalary from './components/TemplateSalary';
import TemplatePhone from './components/TemplatesPhone';
import TemplateNationality from './components/TemplateNationality';
import BaseTemplateSkeleton from './components/Skeleton';

const BaseTemplate: FC = () => {
  const loading = useSelector(userInfoFetchingSelector);

  const componentRef = useRef<HTMLInputElement>(null);

  return (
    <UserInfoLayout
      widthHeaderMargin={false}
      title="Базовый шаблон"
      getButton={() => (
        <ReactToPrint
          trigger={() => (
            <Button
              text="Скачать"
              onClick={() => {
                window.print();
              }}
            />
          )}
          content={() => componentRef.current}
        />
      )}
    >
      {loading ? (
        <BaseTemplateSkeleton />
      ) : (
        <section className={styles.template} ref={componentRef}>
          <TemplateHeader />
          <TemplateAboutMe />
          <TemplateGender />
          <TemplateNationality />
          <TemplateBirdthday />
          <TemplateEducation />
          <TemplateSalary />
          <TemplateExperience />
          <TemplateSkills />
          <TemplatePhone />
        </section>
      )}
    </UserInfoLayout>
  );
};

export default BaseTemplate;
