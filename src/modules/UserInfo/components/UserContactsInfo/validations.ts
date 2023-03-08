import * as Yup from 'yup';

export const contactsSchema = Yup.object().shape({
  email: Yup.string().email('Неправильный формат почты').required('Это поле обязательно'),
  phone: Yup.string().required('Это поле обязательно'),
  socials: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string(),
        text: Yup.string().required(),
        type: Yup.string().required(),
      })
    )
    .test({
      message: 'Не больше 10 скиллов',
      test: (arr) => arr && arr.length <= 10,
    }),
  site: Yup.string()
    .url('Неверный формат')
    // .matches(
    //   /((https?):
    // \/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //   'Неверный формат'
    // )
    .nullable(),
});
