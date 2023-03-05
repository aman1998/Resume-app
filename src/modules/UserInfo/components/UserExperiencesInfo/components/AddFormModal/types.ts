import { BaseSyntheticEvent } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { IExperiencesInfoStage } from '@components/stages/ExperiencesStage/types';

export interface IAddFormModalProps {
  onSubmit: (e?: BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
  control: Control<IExperiencesInfoStage>;
  errors: FieldErrors<IExperiencesInfoStage>;
}
