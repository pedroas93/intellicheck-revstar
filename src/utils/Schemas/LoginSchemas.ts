import * as z from 'zod';

import { errorMessages } from './error-messages';
import {
  loginFields,
  recoveryPasswordField,
  forgotPasswordField,
  registerFields,
  registerFieldsFirstStep
} from './input-fields';

export const LoginSchema = z.object({
  [loginFields?.email as string]: z.string().email().nonempty(errorMessages.required),
  [loginFields?.password]: z.string().nonempty(errorMessages.required)
});

export const RecoverySchema = z.object({
  [recoveryPasswordField?.password]: z.string().nonempty(errorMessages.required),
  [recoveryPasswordField?.recoveryPassword]: z.string().nonempty(errorMessages.required)
});

export const ForgotPasswordSchema = z.object({
  [forgotPasswordField?.email as string]: z.string().email().nonempty(errorMessages.required)
});

export const RegisterSchema = z.object({
  [registerFields?.email as string]: z.string().email().nonempty(errorMessages.required),
  [registerFields?.password]: z.string().nonempty(errorMessages.required),
  [registerFields?.repeatPassword]: z.string().nonempty(errorMessages.required)
});

export const RegisterSchemaFirstStep = z.object({
  [registerFieldsFirstStep?.email as string]: z.string().email().nonempty(errorMessages.required)
});
