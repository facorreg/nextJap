import React, { useState } from 'react';
import Image from 'next/image';
import StyledForms from './form.style';
import Register from './register.form';
import Login from './login.form';
import Forgot from './forgot.form';

const HPForm = () => {
  const [formToDisplay, setFormToDisplay] = useState('register');

  const changeFormHandler = (refs, formName) => (e) => {
    e.preventDefault();
    Object.keys(refs).forEach((key) => refs[key].ref.current.value = '');
    setFormToDisplay(formName)
  };

  const forms = {
    register: Register,
    login: Login,
    forgot: Forgot,
  };

  const Form = forms[formToDisplay]
  return (
    <StyledForms currentForm={formToDisplay}>
      <Image src="/Japan.webp" layout="fill" className="flipped" />
      <Form changeFormHandler={changeFormHandler} />
    </StyledForms>
  )
};

export default HPForm;