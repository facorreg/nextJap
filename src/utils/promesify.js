/*
  returns a promise based on a boolean, pretty straight forward.
*/

const promesify = (shouldResolve, msg) => {
  if (shouldResolve) return Promise.resolve();
  return Promise.reject(new Error(msg));
};

export default promesify;
