import { ChangeEvent, FC, useRef, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import { Controller, useFieldArray } from 'react-hook-form';
import { FormHelperText, Chip } from '@mui/material';

import TextField from '@UI/TextField';
import Button from '@UI/Button';

import { TTextListControlProps } from './types';
import styles from './list.module.scss';

// need remove validation outside component to yup

const TextListControl: FC<TTextListControlProps> = ({
  control,
  name,
  errorMessage,
  labelText,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const [listItem, setListItem] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setListItem(e.target.value);

  const checkIsDuplicate = fields.some((item) => item.text === listItem);

  const addItem = () => {
    if (listItem && !checkIsDuplicate) {
      append({ text: listItem });
      setListItem('');
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className={styles.list}>
      <div className={styles['list__value']}>
        <Controller
          name={name}
          control={control}
          defaultValue={''}
          render={() => (
            <TextField
              {...props}
              label={labelText}
              className={styles['list__text-field']}
              inputRef={inputRef}
              onChange={onChange}
              type="text"
              value={listItem}
            />
          )}
        />
        <Button
          className={styles['list__btn']}
          variant="contained"
          text="Добавить"
          disabled={checkIsDuplicate || fields.length >= 10}
          onClick={addItem}
        />
      </div>
      <List>
        <TransitionGroup>
          {fields.map((item, index) => (
            <Collapse key={item.id} className={styles['list__collapse']}>
              <Chip label={item.text} onDelete={() => remove(index)} className={styles.chip} />
            </Collapse>
          ))}
          {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </TransitionGroup>
      </List>
    </div>
  );
};

export default TextListControl;
