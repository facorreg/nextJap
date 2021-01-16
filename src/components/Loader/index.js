import React from 'react';
import StyledLoader from './loader.style';

const Loader = () => (
  <StyledLoader>
    {[...Array(4)].map(() => { return <div /> })}
  </StyledLoader>
)

export default Loader;
