import {
  EEducationTypes,
  EEducationTypesRu,
} from './../components/Stages/EducationsInfoStage/types';

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
