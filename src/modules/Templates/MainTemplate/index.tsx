import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';

import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { getFullName } from '@utils/resumeUtils';

import styles from './popular-template.module.scss';
import TemplateSidebar from './components/Sidebar';
import TemplatePersonalInfo from './components/PersonalInfo';
import TemplateEducationsInfo from './components/EducationsInfo';
import TemplateExperiencesInfo from './components/ExperiencesInfo';
import TemplateAboutInfo from './components/AboutInfo';
import { IMainTemplateProps } from './types';

const PopularTemplate: FC<IMainTemplateProps> = ({ isReverse }) => {
  const info = useSelector(personalInfoSelector);

  const componentRef = useRef<HTMLInputElement>(null);

  return (
    <UserInfoLayout
      title="Популярный шаблон"
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
      <section
        className={styles.template}
        style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}
        ref={componentRef}
      >
        <div className={styles['template__sidebar']}>
          <TemplateSidebar />
        </div>
        <div className={styles['template__right']}>
          <div className={styles['template__fullname']}>
            {getFullName(info?.lastname, info?.firstname, info?.surname)}
          </div>
          <TemplatePersonalInfo />
          <TemplateExperiencesInfo />
          <TemplateEducationsInfo />
          <TemplateAboutInfo />
        </div>
      </section>
    </UserInfoLayout>
  );
};

export default PopularTemplate;
