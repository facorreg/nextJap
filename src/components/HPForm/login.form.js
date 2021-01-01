import React from 'react';
import PropTypes from 'prop-types';
import { useGeneratedInputRefs } from 'ownHooks';
import { promesify } from 'utils';

const refsSchema = [{
  name: 'identifier',
  validator: (str) => promesify(str.length, 'Please enter either your e-mail or username to login'),
}, {
  name: 'password',
  validator: (str) => promesify(str.length, 'Please provide your password to login'),
}];

const Login = ({ changeFormHandler }) => {
  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, () => alert('toto'), { noWhite: true });

  return (
    <form>
      <h2>LOGIN</h2>
      <div className="inputContainer">
        <input name="identifier" placeholder="Username or E-mail Address" type="text" ref={refs.identifier.ref} />
        <input name="password" placeholder="Password" type="password" ref={refs.password.ref} />
      </div>
      <div className="formError">
        <div className="errorMessage">{errorMessage}</div>
      </div>
      <div className="links">
        <a onClick={changeFormHandler(refs, 'register')}><i>I don't have an account</i></a>
        <a className="forgot" onClick={changeFormHandler(refs, 'forgot')}><i>I forgot my password</i></a>
      </div>
      <input className="submit" type="submit" value="Submit" onClick={handleSubmit} disabled={false} />
    </form>
  )
}

Login.propTypes = {
  changeFormHandler: PropTypes.func.isRequired,
}

export default Login;