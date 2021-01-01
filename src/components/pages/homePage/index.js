import React, { useContext } from 'react';
import { AuthContext } from 'context';
import StyledHomePage from './homepage.style';
import HPForm from 'components/HPForm';

const Homepage = () => {
  const { isAuthenticated, ...rest } = useContext(AuthContext);
  console.log(rest);

  return (
    <StyledHomePage>
      {!isAuthenticated && <HPForm />}
    </StyledHomePage>
  )
}

export default Homepage;
