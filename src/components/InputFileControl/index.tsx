import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import { FormHelperText } from '@mui/material';

import Button from '@UI/Button';

import { TInputFileControlProps } from './type';
import styles from './file.module.scss';
import { formatText, sizeText } from './constants';

const InputFileControl: FC<TInputFileControlProps> = ({
  control,
  name = '',
  errorMessage,
  handleResetFile,
}) => {
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const [fileURL, setFileURL] = useState('');

  useEffect(() => {
    if (control._defaultValues.photoUrl) setFileURL(control._defaultValues.photoUrl);
  }, [control._defaultValues.photoUrl]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFileURL(URL.createObjectURL(selectedFile));
    }
  };

  function deleteHandler() {
    URL.revokeObjectURL(fileURL);
    setFileURL('');
    handleResetFile();
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <div className={styles.file}>
          <Avatar sx={{ width: 150, height: 150 }} alt="upload" className={styles['file__avatar']}>
            {fileURL && (
              <Image
                width={150}
                src={fileURL}
                height={150}
                alt="upload"
                className={styles['file__img']}
              />
            )}
          </Avatar>

          <FormHelperText className={styles['file__text']} error={errorMessage === formatText}>
            {formatText}
          </FormHelperText>
          <FormHelperText className={styles['file__text']} error={errorMessage === sizeText}>
            {sizeText}
          </FormHelperText>

          <input
            ref={uploadInputRef}
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: 'none' }}
            onChange={(e) => {
              onChange(e.target.files ? e.target.files[0] : '');
              onFileChange(e);
            }}
          />
          <div className={styles['file__btns']}>
            <Button
              onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
              variant="contained"
              text="Загрузить"
            />
            {fileURL && (
              <Button
                style={{ marginLeft: 8 }}
                onClick={deleteHandler}
                text="Удалить"
                color="error"
              />
            )}
          </div>
        </div>
      )}
    />
  );
};

export default InputFileControl;
