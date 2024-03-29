import { cva, type VariantProps } from 'class-variance-authority';
import { type ClassValue, clsx } from 'clsx';
import * as React from 'react';
import type { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
  'd-inline-flex align-items-center justify-content-center bg-primary-900 pointer-events-none bg-gray-250 text-white rounded-4 transition transition-duration-250 p-3',
  {
    variants: {
      variant: {
        base: 'text-base',
        primary: 'bg-primary-500 h-12',
        gray: 'bg-gray-200 rounded-2xl text-primary pl-4 pr-4 hover:bg-primary hover:text-white font-semibold',
        white:
          'bg-white text-primary border border-primary rounded-2xl pl-4 pr-4 hover:bg-primary hover:text-white font-semibold p-2 font-bold',
        danger: '',
        success: '',
        info: '',
        outline: '',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        primary: 'h-8',
        small: 'h-8 text-[13px]',
        large: 'h-12'
      }
    },
    defaultVariants: {
      variant: 'base',
      size: 'small'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  buttonText?: string | ReactElement;
  deepClassName?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, loading, buttonText, deepClassName, ...props }, ref) => {
    const Comp = 'button';

    return (
      <Comp
        style={{
          backgroundColor: '#020E33',
          height: '40px',
          borderColor: '#020E33'
        }}
        className={cn(
          buttonVariants({
            variant,
            size,
            className: `${className} ${deepClassName}`
          })
        )}
        ref={ref}
        // eslint-disable-next-line react/no-children-prop
        children={
          <div>
            {loading ? (
              <div className="d-flex flex-row"></div>
            ) : (
              <div className="d-flex flex-row align-items-center">
                {buttonText && <>{buttonText}</>} {children}
              </div>
            )}
          </div>
        }
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
