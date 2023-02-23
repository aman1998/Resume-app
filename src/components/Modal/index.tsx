import { FC } from 'react';
import MUIModal from '@mui/material/Dialog';

import { IModal } from './types';

const Modal: FC<IModal> = ({ isOpen, onClose, title, children }) => (
  <MUIModal open={isOpen} onClose={onClose} fullWidth={true}>
    {title}
    {children}
  </MUIModal>
);

export default Modal;
