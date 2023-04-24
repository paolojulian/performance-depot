import { getBlogPosts } from '@/features/landing/api';
import Landing from '@/features/landing/components/Landing';
import { useQuery } from '@tanstack/react-query';
import React, { FunctionComponent } from 'react';

export type LandingPageProps = {
  // No Props
};

const LandingPage: FunctionComponent<LandingPageProps> = (props) => {
  const { data } = useQuery(['test'], getBlogPosts);
  console.log(data);
  // Get All Data
  return <Landing></Landing>;
};

export default LandingPage;
