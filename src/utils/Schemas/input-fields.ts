import type {
  LoginFields,
  RecoveryPassword,
  ForgotPassword,
  RegisterFields,
  RegisterFieldsFirstStep
} from '../../types/Validations';

export const loginFields: LoginFields = {
  email: 'email',
  password: 'password'
};

export const recoveryPasswordField: RecoveryPassword = {
  password: 'password',
  recoveryPassword: 'recoveryPassword'
};

export const forgotPasswordField: ForgotPassword = {
  email: 'email'
};

export const registerFields: RegisterFields = {
  email: 'email',
  password: 'password',
  repeatPassword: 'repeatPassword'
};

export const registerFieldsFirstStep: RegisterFieldsFirstStep = {
  email: 'email'
};
