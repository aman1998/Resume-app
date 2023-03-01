import * as Yup from 'yup';

export const experiencesSchema = Yup.object().shape({
  companyName: Yup.string().required('Это поле обязательно'),
  profession: Yup.string().required('Это поле обязательно'),
  companyLocation: Yup.string().required('Это поле обязательно'),
  aboutWork: Yup.string().required('Это поле обязательно'),
  startMonth: Yup.string().required('Это поле обязательно'),
  startYear: Yup.string().required('Это поле обязательно'),
  skills: Yup.array()
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
  endMonth: Yup.string().nullable(),
  endYear: Yup.string().nullable(),
});
