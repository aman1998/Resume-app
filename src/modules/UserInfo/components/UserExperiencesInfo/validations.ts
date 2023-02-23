import * as Yup from 'yup';

export const experiencesSchema = Yup.object().shape({
  companyName: Yup.string().required('Это поле обязательно'),
  profession: Yup.string().required('Это поле обязательно'),
  companyLocation: Yup.string(),
  aboutWork: Yup.string().required('Это поле обязательно'),
});
