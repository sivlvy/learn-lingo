import * as Yup from 'yup'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .matches(emailPattern, 'Enter a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
})

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(emailPattern, 'Enter a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
})

const lessonFormValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required')
    .min(3, 'Full Name must be at least 3 characters')
    .max(100, 'Full Name cannot exceed 100 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  phone: Yup.string().required('Phone number is required'),
  preference: Yup.string().required('Please select a preference')
})

export {
  signInValidationSchema,
  signUpValidationSchema,
  lessonFormValidationSchema
}
