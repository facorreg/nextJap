import React from 'react';
import PropTypes from 'prop-types';
import { useGeneratedInputRefs, useConnectionDataHandler } from 'ownHooks';
import { promesify } from 'utils';
import Common from '../common.form';

const refsSchema = [{
  name: 'identifier',
  validator: (str) => promesify(str.length, 'Please enter either your e-mail or username to login'),
}, {
  name: 'password',
  validator: (str) => promesify(str.length, 'Please provide your password to login'),
}];

const Login = ({ openModal, ...rest }) => {
  const connect = useConnectionDataHandler('login', 'Unable to connect user', rest)
  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, connect, { noWhite: true });
  const openModalHandler = (modalName) => () => openModal(modalName);

  return (
    <Common imgSrc="/Japan.webp" invert>
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
          <a onClick={openModalHandler('forgot')}>I forgot my password</a>
        </div>
        <input className="submit" type="submit" value="Submit" onClick={handleSubmit} disabled={false} />
      </form>
    </Common>
  )
}

Login.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default Login;