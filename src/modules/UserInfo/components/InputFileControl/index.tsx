import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

import Button from '@UI/Button';

import { TInputFileControlProps } from './type';

const InputFileControl: FC<TInputFileControlProps> = ({ control, name = '' }) => {
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
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <>
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
          <Button
            onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
            variant="contained"
            text="Upload"
          />
          {fileURL && (
            <div className="image">
              <Image width={200} src={fileURL} height={200} alt="upload" />
              <button onClick={deleteHandler}>delete image</button>
            </div>
          )}
        </>
      )}
    />
  );
};

export default InputFileControl;
