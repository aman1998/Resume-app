import * as Yup from 'yup';

export const educationsSchema = Yup.object().shape({
  educationName: Yup.string().required('Это поле обязательно'),
  faculty: Yup.string().required('Это поле обязательно'),
  educationLocation: Yup.string().required('Это поле обязательно'),
  aboutEducation: Yup.string().required('Это поле обязательно'),
  type: Yup.string().required('Это поле обязательно'),
  startMonth: Yup.string().required('Это поле обязательно'),
  startYear: Yup.string().required('Это поле обязательно'),
  endMonth: Yup.string(),
  endYear: Yup.string(),
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
});
