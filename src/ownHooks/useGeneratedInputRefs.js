import { useRef, useState } from 'react';

const useGeneratedInputRefs = (schema, submitCallback, options = {}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [timeoutHandler, setTimeoutHandler] = useState(null);

  const onValidation = {
    noWhite: (str) => (typeof str === 'string' ? str.replace(/\s+/, '') : str),
    default: (str) => str,
  };

  const applyOptions = (opt) => (input) => Object.keys(opt)
    .reduce((acc, optKey) => (
      opt[optKey] && onValidation[optKey]
        ? onValidation[optKey](acc)
        : acc), input);

  const refs = schema.reduce((acc, {
    name, type, validator, ownOptions = {}, notGQL,
  }) => ({
    ...acc,
    [name]: {
      ref: useRef(''),
      middleWare: applyOptions({ ...options, ...ownOptions, default: true }),
      isGQL: !notGQL,
      get refValue() { return this.ref.current[type === 'checkbox' ? 'checked' : 'value']; },
      get refValueUpdated() { return this.middleWare(this.refValue); },
      get validator() { return validator(this.refValueUpdated); },
    },
  }), {});

  const validateAll = () => Promise.all(Object.keys(refs).map((key) => refs[key].validator));
  const getAllInputs = (GQLOnly = true) => Object.keys(refs)
    .reduce((acc, key) => (
      GQLOnly && !refs[key].isGQL
        ? acc
        : {
          ...acc,
          [key]: refs[key].refValue,
        }), {});


  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        await validateAll();
        await submitCallback({ variables: { input: getAllInputs() } });
        return true;
      } catch (err) {
        setErrorMessage(err.message || 'something went wrong');
        if (timeoutHandler) (clearTimeout(timeoutHandler));
        setTimeoutHandler(setTimeout(() => setErrorMessage(''), 5000));
        return false;
      }
    })();
  };

  return {
    refs,
    handleSubmit,
    errorMessage,
  };
};

export default useGeneratedInputRefs;
