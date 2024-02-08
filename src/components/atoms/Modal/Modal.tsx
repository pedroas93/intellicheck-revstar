import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog } from 'primereact/dialog';
import { type FC, ReactNode } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import * as z from 'zod';

// import { Input } from '@/components/atoms/Input';

// import { Button } from '@/components/atoms/Button';

export interface ModalProps {
  children?: ReactNode;
  minHeight?: string;
  onHide?: () => void;
  title?: string | ReactNode;
  visible?: boolean;
  width?: string;
  footer?: ReactNode;
  className?: string;
  subTitle?: string;
}

export const Modal: FC<ModalProps> = ({
  minHeight,
  onHide,
  title,
  visible,
  width = '50vw',
  footer,
  className
}) => {
  // eslint-disable-next-line no-console
  console.log('footer', footer);
  const errorMessages = {
    minLength: 'Too short',
    maxLength: 'Too long',
    required: 'Required',
    dontmatch: "The password doesn't match"
  };

  type ForgotPassword = {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
  };

  const recoveryPasswordField: ForgotPassword = {
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phoneNumber: 'phoneNumber'
  };

  const RecoverySchema = z.object({
    [recoveryPasswordField?.name as string]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.email as string]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.password as string]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.role as string]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.phoneNumber as string]: z.string().nonempty(errorMessages.required)
  });

  // eslint-disable-next-line no-empty-pattern
  const {} = useForm<FieldValues>({
    resolver: zodResolver(RecoverySchema)
  });

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={title}
        visible={visible}
        onHide={() => onHide?.()}
        style={{ width, minHeight }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        className={className}
        position={'right'}
      >
        <span>CHANGE CODE HERE</span>
        {/* <span>Fill out some information</span>
        <div className="h-[1px] bg-gray-1100 mb-6"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-between"
        >
          <div className="flex  flex-col justify-between w-full  gap-8 textInput">
            <Input
              register={register(forgotPasswordField?.name as string)}
              label="Name"
              placeholder="Enter Name"
              required
              error={errors[forgotPasswordField?.name as string]?.message}
            />
            <Input
              register={register(forgotPasswordField?.email as string)}
              label="Email Address"
              placeholder="Enter Email Address"
              required
              error={errors[forgotPasswordField?.email as string]?.message}
            />
            <Input
              register={register(forgotPasswordField?.password as string)}
              label="password"
              placeholder="password"
              required
              error={errors[forgotPasswordField?.password as string]?.message}
            />
            <Input
              register={register(forgotPasswordField?.role as string)}
              label="Select Role"
              placeholder="Enter Select Role"
              required
              error={errors[forgotPasswordField?.role as string]?.message}
            />
            <Input
              register={register(forgotPasswordField?.phoneNumber as string)}
              label="Phone Number"
              placeholder="Enter Phone Number"
              required
              error={errors[forgotPasswordField?.phoneNumber as string]?.message}
            />
          </div>

          <div className="flex flex-col gap-1 buttonText">
            <Button type="submit" buttonText="Confirm" className="bg-primary-500 h-12" />
          </div>
          <div className="flex flex-col gap-1"></div>
        </form>
        {footer} */}
      </Dialog>
    </div>
  );
};
