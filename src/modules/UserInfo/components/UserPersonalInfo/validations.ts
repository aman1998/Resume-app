import * as Yup from 'yup';

// export const checkIfFilesAreTooBig = (files?: [File]): boolean => {
//   let valid = true;
//   if (files) {
//     files.map((file) => {
//       const size = file.size / 1024 / 1024;
//       if (size > 10) {
//         valid = false;
//       }
//     });
//   }
//   return valid;
// };

// export const checkIfFilesAreCorrectType = (files?: [File]): boolean => {
//   let valid = true;
//   if (files) {
//     files.map((file) => {
//       if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) {
//         valid = false;
//       }
//     });
//   }
//   return valid;
// };

export const userSchema = Yup.object().shape({
  firstname: Yup.string().required('Это поле обязательно'),
  lastname: Yup.string().required('Это поле обязательно'),
  surname: Yup.string(),
  location: Yup.string(),
  aboutme: Yup.string(),
  gender: Yup.string(),
  birthday: Yup.string().required('Это поле обязательно'),
  file: Yup.mixed()
    .required('Это поле обязательно')
    .test(
      'fileSize',
      'File is too large',
      (value: any) => value && value[0].size <= 1048576 // 1 MB
    )
    .test(
      'fileType',
      'Unsupported file type',
      (value: any) => value && ['image/jpeg', 'image/png'].includes(value[0].type)
    ),
});
