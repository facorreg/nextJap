import { useMemo } from 'react';
import { initializeApollo } from 'apollo';

const useApollo = (initialState, { getCookie = () => { } } = {}) => {
  const { jwt } = getCookie('user') || {}
  const client = useMemo(() => initializeApollo(initialState, { jwt }), [initialState]);
  return client;
};

export default useApollo;
