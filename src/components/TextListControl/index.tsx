import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';

import { TNullable } from '@store/types';

import TextField from '@UI/TextField';
import Button from '@UI/Button';

import TextItem from './components/TextItem';

const TextListControl: FC = () => {
  const [list, setList] = useState<string[]>([]);
  const [listItem, setListItem] = useState<TNullable<string>>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setListItem(e.target.value);

  const addItem = () => {
    if (listItem && !list.some((item) => item === listItem)) {
      setList([...list, listItem]);
      setListItem(null);
    }
  };

  const handleRemoveList = (item: string) => {
    setList((prev) => [...prev.filter((i) => i !== item)]);
  };

  return (
    <div>
      <div>
        <TextField onChange={onChange} type="text" value={listItem} />
        <Button text="Добавить" onClick={addItem} />
      </div>
      <List>
        <TransitionGroup>
          {list.map((item) => (
            <Collapse key={item}>
              <TextItem item={item} handleRemoveList={handleRemoveList} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </div>
  );
};

export default TextListControl;
