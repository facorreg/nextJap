import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ME } from 'queries';
import { AuthContext } from 'context';
import { getCookie, setCookie, removeCookie } from 'utils'

const AuthProvider = ({ children, client }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const token = getCookie('user');
      if (token) {
        const { data: { me } } = await client.query({ query: ME });
        setUser(me);
      }
      setLoading(false);
    };
    getUser();
  }, [user]);

  const login = (usr) => {
    console.log(usr);
    setCookie('user', usr);
    setUser(usr.user);
  };

  const logout = () => {
    removeCookie('user');
    client.resetStore();
    setUser(null);
  };

  const providerValue = {
    isAuthenticated: Boolean(user),
    loading,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired
};

export default AuthProvider;
