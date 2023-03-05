import { BaseSyntheticEvent } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { IEducationsInfoStage } from '@components/stages/EducationsInfoStage/types';

export interface IAddFormModalProps {
  onSubmit: (e?: BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
  control: Control<IEducationsInfoStage>;
  errors: FieldErrors<IEducationsInfoStage>;
}
