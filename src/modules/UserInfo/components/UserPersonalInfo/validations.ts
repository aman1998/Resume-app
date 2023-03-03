import * as Yup from 'yup';

import { formatText, sizeText } from '../../../../components/InputFileControl/constants';

export const userSchema = Yup.object().shape({
  firstname: Yup.string().required('Это поле обязательно'),
  lastname: Yup.string().required('Это поле обязательно'),
  surname: Yup.string().nullable(),
  location: Yup.string().required('Это поле обязательно'),
  aboutme: Yup.string().required('Это поле обязательно'),
  nationality: Yup.string().required('Это поле обязательно'),
  gender: Yup.string(),
  birthday: Yup.string().required('Это поле обязательно'),
  file: Yup.mixed()
    .nullable()
    .test('fileType', formatText, (value: any) =>
      value ? ['image/jpeg', 'image/png'].includes(value.type) : true
    )
    .test(
      'fileSize',
      sizeText,
      (value: any) => (value ? value.size <= 1048576 : true) // 1 MB
    ),
});

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
