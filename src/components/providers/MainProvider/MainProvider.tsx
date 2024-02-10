import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// This is the place responsible for grouping all providers from the app
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainProvider = ({ children }: Props) => (
  <></>
  // <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
