import React, { useContext } from 'react';
import { StyledHeader, StyledMenuButton } from './header.style';
import { AuthContext, ModalContext } from 'context';

const Header = () => {
  const { isAuthenticated, logout, loading, error } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);
  const openModalHandler = (modalName) => () => openModal(modalName);

  if (loading || error) return null;

  return (
    <StyledHeader>
      {
        !isAuthenticated ? (
          <div className="menu">
            <StyledMenuButton en="LOGIN" jp="サインイン" onClick={openModalHandler('login')} />
            <StyledMenuButton en="REGISTER" jp="サインアップ" onClick={openModalHandler('register')} />
          </div>
        )
          : (
            <div className="menu">
              <StyledMenuButton en="LOGOUT" jp="サインアウト" onClick={logout} />
            </div>
          )
      }
    </StyledHeader>
  )
}

export default Header;
