import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import StyledForm from './form.style';

const Register = ({ children }) => {
  return (
    <StyledForm>
      <Image src="/Japan.webp" layout="fill" className="flipped" />
      {children}
    </StyledForm>
  )
}

Register.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Register;