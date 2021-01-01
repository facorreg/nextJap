import React from 'react';
import PropTypes from 'prop-types';
import { useGeneratedInputRefs } from 'ownHooks';
import { promesify, emailRegex } from 'utils';

const refsSchema = [{
  name: 'email',
  validator: (str) => promesify(Boolean(str.match(emailRegex)), 'Invalid email'),
}];

const Forgot = ({ changeFormHandler }) => {
  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, () => alert('toto'), { noWhite: true });

  return (
    <form>
      <h2>RESET PASSWORD</h2>
      <div className="inputContainer">
        <input name="email" placeholder="E-mail address" type="text" ref={refs.email.ref} />
      </div>
      <div className="formError">
        <div className="errorMessage">{errorMessage}</div>
      </div>
      <div className="links">
        <a onClick={changeFormHandler(refs, 'register')}><i>Create account</i></a>
        <a onClick={changeFormHandler(refs, 'login')}><i>Login</i></a>
      </div>
      <input className="submit" type="submit" value="Submit" onClick={handleSubmit} disabled={false} />
    </form>
  )
}

Forgot.propTypes = {
  changeFormHandler: PropTypes.func.isRequired,
}

export default Forgot;