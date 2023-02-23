import * as Yup from 'yup';

export const specialitySchema = Yup.object().shape({
  profession: Yup.string().required('Это поле обязательно'),
  salary: Yup.string().required('Это поле обязательно').typeError('Должно быть число'),
});
