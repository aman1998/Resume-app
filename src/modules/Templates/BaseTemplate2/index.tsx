import { FC, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useSelector } from 'react-redux';

import UserInfoLayout from '@components/UserInfoLayout';

import { personalInfoSelector, userInfoFetchingSelector } from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import Info from '../Info';

import styles from './base-template.module.scss';
import TemplateHeader from './components/TemplateHeader';
import TemplateSkeleton from './components/Skeleton';

const BaseTemplate: FC = () => {
  const loading = useSelector(userInfoFetchingSelector);
  const info = useSelector(personalInfoSelector);

  const componentRef = useRef<HTMLInputElement>(null);

  return (
    <UserInfoLayout
      widthHeaderMargin={false}
      title="Шаблон 5"
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
          content={() => componentRef.current}
        />
      )}
    >
      {loading ? (
        <TemplateSkeleton />
      ) : (
        <>
          <section className={styles.templateMobile}>
            <TemplateHeader />
            <Info withColors={true} />
          </section>
          <section ref={componentRef} className={styles.template}>
            <TemplateHeader />
            <Info withColors={true} />
          </section>
        </>
      )}
    </UserInfoLayout>
  );
};

export default BaseTemplate;
