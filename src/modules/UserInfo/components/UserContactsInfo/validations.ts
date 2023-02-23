import * as Yup from 'yup';

export const contactsSchema = Yup.object().shape({
  email: Yup.string().email('Неправильный формат почты').required('Это поле обязательно'),
  phone: Yup.string().required('Это поле обязательно'),
  messenger: Yup.string(),
  site: Yup.string(),
});
