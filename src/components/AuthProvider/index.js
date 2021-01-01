import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ME } from 'queries';
import { AuthContext } from 'context';
import { getCookie, setCookie, removeCookie, isServerSide } from 'utils'

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
    setCookie('user', usr);
    setUser(usr);
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AuthProvider;
