import React, { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import StyledModal from './WithModal.style';
// eslint-disable-next-line import/no-cycle
import { ModalContext } from 'context';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#181A1B',
    padding: '0px',
    maxHeight: '100vh',
    overflowY: 'auto',
  },
  overlay: {
    background: 'rgba(24, 26, 27, 0.8)'

  }
};

const WithModal = (modalComponents) => ({ children }) => {
  useEffect(() => (
    Modal.setAppElement('body')
  ));

  const [isOpen, setIsOpen] = React.useState(false);
  const [modalName, setModalName] = React.useState(null);
  const [modalProps, setModalProps] = React.useState({});

  const CurrentModal = modalComponents[modalName];

  const openModal = (newModalName, childProps) => {
    setModalName(newModalName);
    setModalProps(childProps);
    console.log(childProps);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{
      afterOpenModal, closeModal, isOpen, openModal,
    }}
    >
      <StyledModal>
        <Modal
          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          portalClassName="modalPortal"
        >
          <div className="modalForm">
            {CurrentModal && <CurrentModal {...modalProps} />}
          </div>
        </Modal>
        {children}
      </StyledModal>
    </ModalContext.Provider>
  );
};

WithModal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default WithModal;
