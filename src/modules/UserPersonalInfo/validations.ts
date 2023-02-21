import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  firstname: Yup.string().required('Это поле обязательно'),
  lastname: Yup.string().required('Это поле обязательно'),
  surname: Yup.string(),
  location: Yup.string(),
  aboutme: Yup.string(),
  gender: Yup.string().required('Это поле обязательно'),
  birthday: Yup.string().required('Это поле обязательно'),
});
