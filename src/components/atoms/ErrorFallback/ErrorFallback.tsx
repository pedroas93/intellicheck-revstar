import { Toast } from 'primereact/toast';
import { ReactElement, useEffect, useRef } from 'react';

export const ErrorFallback = (): ReactElement => {
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (toast.current) {
      toast.current.show({
        severity: 'error',
        summary: 'Error Message',
        detail: 'Something went wrong!',
        life: 5000
      });
    }
  }, []);

  return <Toast ref={toast} />;
};
