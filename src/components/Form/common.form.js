import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import CommonStyle from './common.style';

const Register = ({ imgSrc, invert, children }) => {
  return (
    <CommonStyle invert={invert}>
      <Image src={imgSrc} layout="fill" className="flipped" />
      {children}
    </CommonStyle>
  )
}

Register.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Register;