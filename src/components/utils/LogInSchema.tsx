import { object, string } from 'yup'

export const LogInSchema = object().shape({
  email: string().email('Invalid email').required('*'),
  password: string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('*'),
});
