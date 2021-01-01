import React from 'react';
import PropTypes from 'prop-types';
import { useGeneratedInputRefs } from 'ownHooks';
import { promesify } from 'utils';
import Common from './common.form';

const refsSchema = [{
  name: 'email',
  validator: (str) => promesify(Boolean(str.match(emailRegex)), 'Invalid email'),
}];

const Forgot = () => {
  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, () => alert('toto'), { noWhite: true });

  return (
    <Common>
      <form>
        <h2>RESET PASSWORD</h2>
        <div className="inputContainer">
          <input name="email" placeholder="E-mail address" type="text" ref={refs.email.ref} />
        </div>
        <div className="formError">
          <div className="errorMessage">{errorMessage}</div>
        </div>
        <div className="links" />
        <input className="submit" type="submit" value="Submit" onClick={handleSubmit} disabled={false} />
      </form>
    </Common>
  )
}

Forgot.propTypes = {
}

export default Forgot;