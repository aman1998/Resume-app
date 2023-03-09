import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';

import TextField from '@UI/TextField';
import Button from '@UI/Button';

import { TTextListControlProps, ITextUseField } from './types';
import styles from './list.module.scss';
import TextList from './components/List';

const TextListControl: FC<TTextListControlProps> = ({
  control,
  name,
  errorMessage,
  labelText,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove }: ITextUseField = useFieldArray({
    control,
    name,
  });

  const [listItem, setListItem] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setListItem(e.target.value);

  const checkIsDuplicate = useMemo(
    () => fields.some((item) => item.text === listItem),
    [fields, listItem]
  );

  const handleRemove = useCallback(
    (index: number): void => {
      remove(index);
    },
    [remove]
  );

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
          text="+"
          disabled={checkIsDuplicate || fields.length >= 10}
          onClick={addItem}
        />
      </div>
      <TextList errorMessage={errorMessage} fields={fields} handleRemove={handleRemove} />
    </div>
  );
};

export default TextListControl;
