import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { promesify, setCookie } from 'utils';
import { REGISTER } from 'mutations';
import { AuthContext, ModalContext } from 'context';

const useConnectionDataHandler = (field, errorMsg) => {
  const mutations = {
    register: [REGISTER, 'createUser'],
    login: {},
  };

  const [mut, mutName] = mutations[field];
  const [mutation] = useMutation(mut);
  const { closeModal } = useContext(ModalContext);
  const { login } = useContext(AuthContext)

  const connectionDataHandler = async (args) => {
    try {
      const res = await mutation(args);
      const { error: mutError, ...rest } = res.data[mutName];

      if (mutError) {
        return promesify(false, mutError)
      }

      login(rest);
      closeModal();
      return Promise.resolve(res);
    } catch (err) {
      return promesify(false, errorMsg);
    }
  };

  return connectionDataHandler;
};

export default useConnectionDataHandler;