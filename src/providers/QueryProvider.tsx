import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FunctionComponent } from 'react';

const queryClient = new QueryClient();

export type QueryProviderProps = {
  children: React.ReactNode;
};

const QueryProvider: FunctionComponent<QueryProviderProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
