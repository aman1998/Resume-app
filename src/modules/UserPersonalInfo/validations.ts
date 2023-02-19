import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
});
