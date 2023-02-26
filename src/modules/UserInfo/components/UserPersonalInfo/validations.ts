import * as Yup from 'yup';

import { formatText, sizeText } from './../../../../components/InputFileControl/constants';

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
  location: Yup.string().required('Это поле обязательно'),
  aboutme: Yup.string(),
  gender: Yup.string(),
  birthday: Yup.string().required('Это поле обязательно'),
  file: Yup.mixed()
    // .required('Это поле обязательно')
    .test(
      'fileSize',
      sizeText,
      (value: any) => value && value.size <= 1048576 // 1 MB
    )
    .test(
      'fileType',
      formatText,
      (value: any) => value && ['image/jpeg', 'image/png'].includes(value.type)
    ),
});
