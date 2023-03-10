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

export const getGenderType = (type: string | undefined): string => {
  switch (type) {
    case 'male':
      return 'Мужской';
    case 'female':
      return 'Женский';
    default:
      return '';
  }
};

export const getSalaryInfo = (value?: string | number, type?: string): string => {
  if (!value || !type) return '';

  switch (type) {
    case ECurrency.dollar:
      return `${value}$`;
    case ECurrency.euro:
      return `${value}€`;
    case ECurrency.ruble:
      return `${value}₽`;
    default:
      return '';
  }
};

export const getFullName = (lastname?: string, firstname?: string, surname?: string): string => {
  if (!firstname || !lastname) return 'ФИО';
  return `${lastname} ${firstname} ${surname}`;
};
