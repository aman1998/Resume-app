import { Chip, Collapse, FormHelperText, List } from '@mui/material';
import { FC, memo } from 'react';
import { TransitionGroup } from 'react-transition-group';

import styles from '../../list.module.scss';

import { ITextListProps } from './types';

const TextList: FC<ITextListProps> = memo(({ fields, errorMessage, handleRemove }) => (
  <List>
    <TransitionGroup>
      {fields.map((item, index) => (
        <Collapse key={item.id}>
          <Chip label={item.text} onDelete={() => handleRemove(index)} className={styles.chip} />
        </Collapse>
      ))}
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </TransitionGroup>
  </List>
));

export default TextList;
