import * as Yup from 'yup';

export const specialitySchema = Yup.object().shape({
  profession: Yup.string().required('Это поле обязательно'),
  salary: Yup.string().required('Это поле обязательно').typeError('Должно быть число'),
  skills: Yup.array()
    .nullable()
    .of(
      Yup.object().shape({
        id: Yup.string(),
        text: Yup.string(),
      })
    )
    .test({
      message: 'Не больше 10 скиллов',
      test: (arr) => arr && arr.length <= 10,
    }),
});
