import * as Yup from 'yup';

export const educationsSchema = Yup.object().shape({
  educationName: Yup.string().required('Это поле обязательно'),
  faculty: Yup.string().required('Это поле обязательно'),
  educationLocation: Yup.string().required('Это поле обязательно'),
  aboutEducation: Yup.string().required('Это поле обязательно'),
  type: Yup.string().required('Это поле обязательно'),
  startYear: Yup.string().required('Это поле обязательно'),
  endYear: Yup.string().nullable(),
});
