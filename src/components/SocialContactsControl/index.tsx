import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { MenuItem } from '@mui/material';
import Image from 'next/image';

import { IControl } from '@common/types/controlTypes';

import TextField from '@UI/TextField';
import Button from '@UI/Button';

import { socialOptions } from './constants';
import styles from './social.module.scss';
import TextList from './components/List';
import { ITextUseField } from './types';

const SocialContactsControl: FC<IControl> = ({ control, name, labelText, errorMessage }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove }: ITextUseField = useFieldArray({
    control,
    name,
  });

  const [listItem, setListItem] = useState<string>('');
  const [type, setType] = useState<string>('telegram');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setListItem(e.target.value);
  const onChangeType = (e: ChangeEvent<HTMLInputElement>) => setType(e.target.value);

  const checkIsDuplicate = useMemo(() => fields.some((item) => item.type === type), [fields, type]);

  const handleRemove = useCallback((index: number) => {
    remove(index);
  }, []);

  const addItem = () => {
    if (listItem && !checkIsDuplicate) {
      append({ text: listItem, type });
      setListItem('');
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className={styles.social}>
      <div className={styles['social__form']}>
        <Controller
          name={name}
          control={control}
          defaultValue={''}
          render={() => (
            <>
              <TextField select onChange={onChangeType} defaultValue="telegram">
                {socialOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <Image src={option.label} width={20} height={20} alt="social-icon" />
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label={labelText}
                inputRef={inputRef}
                onChange={onChange}
                type="text"
                value={listItem}
              />
            </>
          )}
        />
        <Button
          variant="contained"
          text="+"
          className={styles['social__btn']}
          disabled={checkIsDuplicate || fields.length >= 10}
          onClick={addItem}
        />
      </div>
      <TextList fields={fields} errorMessage={errorMessage} handleRemove={handleRemove} />
    </div>
  );
};

export default SocialContactsControl;
