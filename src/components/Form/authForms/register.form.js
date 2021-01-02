import React from 'react';
// import PropTypes from 'prop-types';
import { useGeneratedInputRefs, useConnectionDataHandler } from 'ownHooks';
import { promesify, emailRegex } from 'utils';
import Common from './common.form';

const refsSchema = [{
  name: 'username',
  validator: (str) => promesify(str.length > 4, 'Your username must be at lest 4 characters long'),
},
{
  name: 'email',
  validator: (str) => promesify(Boolean(str.match(emailRegex)), 'Invalid email'),
},
{
  name: 'password',
  validator: (str) => promesify(str.length > 8, 'Your password must be at least 8 characters long'),
}];


const Register = () => {
  const register = useConnectionDataHandler('register', 'Unable to create user')
  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, register, { noWhite: true });


  return (
    <Common>
      <form>
        <h2>REGISTER</h2>
        <div className="inputContainer">
          <input name="username" placeholder="Username" type="text" ref={refs.username.ref} />
          <input name="email" placeholder="E-Mail Address" type="text" ref={refs.email.ref} />
          <input name="password" placeholder="Password" type="password" ref={refs.password.ref} />
        </div>
        <div className="formError">
          <div className="errorMessage">{errorMessage}</div>
        </div>
        <div className="links" /> {/* required to place the submit button at the right place*/}
        <input className="submit" type="submit" value="Submit" onClick={handleSubmit} disabled={false} />
      </form>
    </Common>
  )
}

Register.propTypes = {
}

export default Register;