import { Collapse, FormHelperText } from '@mui/material';
import { FC, memo } from 'react';
import { TransitionGroup } from 'react-transition-group';

import SocialChip from '../Chip';

import { ITextListProps } from './types';

const TextList: FC<ITextListProps> = memo(({ fields, errorMessage, handleRemove }) => (
  <div style={{ margin: '8px 0' }}>
    <TransitionGroup>
      {fields.map((item, index) => (
        <Collapse key={item.id} style={{ marginBottom: 4 }}>
          {/* @ts-expect-error */}
          <SocialChip text={item.text} type={item.type} onDelete={() => handleRemove(index)} />
        </Collapse>
      ))}
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </TransitionGroup>
  </div>
));

export default TextList;
