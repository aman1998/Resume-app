import { Chip } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import { ESocialTypes } from '@components/stages/ContactsInfoStage/types';

import { getSocialSrc } from '@utils/imageUtils';

import styles from './chip.module.scss';
import { ISocialChipProps } from './types';

const getChipLabel = (type: ESocialTypes, text: string) => (
  <div className={styles.chip}>
    <Image src={getSocialSrc(type)} width={20} height={20} alt="social-icon" />
    <p>{text}</p>
  </div>
);

const SocialChip: FC<ISocialChipProps> = ({ type, onDelete, text }) => (
  <Chip label={getChipLabel(type, text)} onDelete={onDelete} />
);

export default SocialChip;
