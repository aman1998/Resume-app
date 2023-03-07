import { ChangeEvent, FC, useRef, useState } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Collapse, FormHelperText, MenuItem } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import Image from 'next/image';

import { IControl } from '@common/types/controlTypes';

import TextField from '@UI/TextField';
import Button from '@UI/Button';

import { socialOptions } from './constants';
import SocialChip from './components/Chip';
import styles from './social.module.scss';

const SocialContactsControl: FC<IControl> = ({ control, name, labelText, errorMessage }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const [listItem, setListItem] = useState<string>('');
  const [type, setType] = useState<string>('telegram');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setListItem(e.target.value);
  const onChangeType = (e: ChangeEvent<HTMLInputElement>) => setType(e.target.value);

  // @ts-expect-error
  const checkIsDuplicate = fields.some((item) => item.type === type);

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
      <div style={{ margin: '8px 0' }}>
        <TransitionGroup>
          {fields.map((item, index) => (
            <Collapse key={item.id} style={{ marginBottom: 4 }}>
              {/* @ts-expect-error */}
              <SocialChip text={item.text} type={item.type} onDelete={() => remove(index)} />
            </Collapse>
          ))}
          {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default SocialContactsControl;
