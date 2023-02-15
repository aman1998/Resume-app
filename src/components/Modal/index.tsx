import { FC } from 'react';
import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { IModal } from './types';

const Modal: FC<IModal> = ({ isOpen, onClose, title, children }) => (
  <ModalChakra isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      {!!title && <ModalHeader>{title}</ModalHeader>}
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </ModalChakra>
);

export default Modal;
