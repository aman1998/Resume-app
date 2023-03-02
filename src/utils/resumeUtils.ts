import { ECurrency } from '@components/stages/SpecialityInfoStage/types';

import { EEducationTypes, EEducationTypesRu } from '../components/stages/EducationsInfoStage/types';

export const getEducationType = (type: string): EEducationTypesRu => {
  switch (type) {
    case EEducationTypes.technical:
      return EEducationTypesRu.technical;
    case EEducationTypes.higher:
      return EEducationTypesRu.higher;
    case EEducationTypes.courses:
      return EEducationTypesRu.courses;
    case EEducationTypesRu.college:
      return EEducationTypesRu.college;
    default:
      return EEducationTypesRu.others;
  }
};

export const getGenderType = (type: string): string => {
  switch (type) {
    case 'male':
      return 'Мужской';
    case 'female':
      return 'Женский';
    default:
      return '';
  }
};

export const getSalaryType = (type: ECurrency): string => {
  switch (type) {
    case ECurrency.dollar:
      return '$';
    case ECurrency.euro:
      return '€';
    case ECurrency.ruble:
      return '₽';
    default:
      return '';
  }
};
