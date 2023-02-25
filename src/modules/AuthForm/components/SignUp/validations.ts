import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Неправильный формат').required('Это поле обязательно'),
  password: Yup.string().required('Это поле обязательно'),
  confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
});
