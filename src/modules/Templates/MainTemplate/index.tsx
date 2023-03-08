import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';

import UserInfoLayout from '@components/UserInfoLayout';

import { personalInfoSelector, userInfoFetchingSelector } from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import { getFullName } from '@utils/resumeUtils';

import styles from './main-template.module.scss';
import TemplateSidebar from './components/Sidebar';
import TemplatePersonalInfo from './components/PersonalInfo';
import TemplateEducationsInfo from './components/EducationsInfo';
import TemplateExperiencesInfo from './components/ExperiencesInfo';
import TemplateAboutInfo from './components/AboutInfo';
import { IMainTemplateProps } from './types';
import MainTemplateSkeleton from './components/Skeleton';

const MainTemplate: FC<IMainTemplateProps> = ({ title, isReverse, withColors = true }) => {
  const info = useSelector(personalInfoSelector);
  const loading = useSelector(userInfoFetchingSelector);

  const componentRef = useRef<HTMLInputElement>(null);

  return (
    <UserInfoLayout
      widthHeaderMargin={false}
      title={title}
      getButton={() => (
        <ReactToPrint
          documentTitle={
            info?.firstname && info?.lastname ? `${info.firstname}${info?.lastname}` : 'Resume'
          }
          trigger={() => (
            <Button
              text="Скачать"
              onClick={() => {
                window.print();
              }}
            />
          )}
          onBeforeGetContent={() => {
            if (componentRef.current?.style?.display) {
              componentRef.current.style.display = 'block';
            }
          }}
          onAfterPrint={() => {
            if (componentRef.current?.style?.display) {
              componentRef.current.style.display = 'none';
            }
          }}
          content={() => componentRef.current}
        />
      )}
    >
      {loading ? (
        <MainTemplateSkeleton isReverse={!!isReverse} />
      ) : (
        <>
          <section
            className={styles.templateMobile}
            style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}
          >
            <div className={styles['template__sidebar']}>
              <TemplateSidebar withColors={withColors} />
            </div>
            <div className={styles['template__right']}>
              <div className={styles['template__fullname']}>
                {getFullName(info?.lastname, info?.firstname, info?.surname)}
              </div>
              <TemplatePersonalInfo withColors={withColors} />
              <TemplateExperiencesInfo withColors={withColors} />
              <TemplateEducationsInfo withColors={withColors} />
              <TemplateAboutInfo withColors={withColors} />
            </div>
          </section>
          <section
            className={styles.template}
            style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}
            ref={componentRef}
          >
            <div className={styles['template__sidebar']}>
              <TemplateSidebar withColors={withColors} />
            </div>
            <div className={styles['template__right']}>
              <div className={styles['template__fullname']}>
                {getFullName(info?.lastname, info?.firstname, info?.surname)}
              </div>
              <TemplatePersonalInfo withColors={withColors} />
              <TemplateExperiencesInfo withColors={withColors} />
              <TemplateEducationsInfo withColors={withColors} />
              <TemplateAboutInfo withColors={withColors} />
            </div>
          </section>
        </>
      )}
    </UserInfoLayout>
  );
};

export default MainTemplate;
