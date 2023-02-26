import Image from 'next/image';
import { FC } from 'react';

import { steps } from './constants';
import styles from './steps.module.scss';

const Steps: FC = () => (
  <section className={styles.steps}>
    <h1 className={styles['steps__title']}>Инструкция</h1>
    <div className={styles['steps__list']}>
      {steps.map((item) => (
        <div key={item.id} className={styles.step}>
          <Image
            className={styles['step__title']}
            src={item.icon}
            width={48}
            height={48}
            alt="icon"
          />
          <p className={styles['step__text']}>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Steps;
