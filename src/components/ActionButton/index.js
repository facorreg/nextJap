import React, { useContext } from 'react';
import { AuthContext, ModalContext } from 'context';
import StyledButton from './button.style.js';

const ActionButton = React.memo(({ en, jp, toOpen, modalTopOpenProps }) => {
  const { isAuthenticated, loading, error } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);
  const openModalHandler = (modalName, modalProps) => () => openModal(modalName, modalProps);
  const openCurrentModal = openModalHandler(toOpen, modalTopOpenProps);
  const openRegister = openModalHandler('register', { onCloseModal: openCurrentModal });
  const onClickIfShould = isAuthenticated
    ? openCurrentModal
    : openRegister;
  const onClickHandler = !loading && !error ? onClickIfShould : () => { };

  return <StyledButton en={en} jp={jp} onClick={onClickHandler} />
});

export default ActionButton;
