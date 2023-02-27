import IconButton from '@mui/material/IconButton';
import { FC } from 'react';

import { ITextItemProps } from './types';

const TextItem: FC<ITextItemProps> = ({ handleRemoveList, item }) => (
  <div>
    <p>{item}</p>
    <IconButton
      edge="end"
      aria-label="delete"
      title="Delete"
      onClick={() => handleRemoveList(item)}
      style={{ width: 15, height: 15 }}
    >
      x
    </IconButton>
  </div>
);

export default TextItem;
