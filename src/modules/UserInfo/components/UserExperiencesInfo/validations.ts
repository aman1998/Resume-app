import * as Yup from 'yup';

export const experiencesSchema = Yup.object().shape({
  companyName: Yup.string().required('Это поле обязательно'),
  profession: Yup.string().required('Это поле обязательно'),
  companyLocation: Yup.string().required('Это поле обязательно'),
  aboutWork: Yup.string().required('Это поле обязательно'),
  startMonth: Yup.string().required('Это поле обязательно'),
  startYear: Yup.string().required('Это поле обязательно'),
  endMonth: Yup.string(),
  endYear: Yup.string(),
});
