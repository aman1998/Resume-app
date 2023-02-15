'use client';

import { FC, useState } from 'react';

import Modal from '@components/Modal';

import Button from '@UI/Button';

const Page: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button text="open" onClick={() => setIsOpen(true)} />
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        Modal
      </Modal>
    </>
  );
};

export default Page;
