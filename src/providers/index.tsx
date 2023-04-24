import React, { FunctionComponent } from 'react';
import QueryProvider from './QueryProvider';

export type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: FunctionComponent<ProvidersProps> = (props) => {
  return <QueryProvider>{props.children}</QueryProvider>;
};

export default Providers;
