import React, { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
// import StyledModalComp from './Modal.style';
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
    background: 'rgba(0, 0, 0, 0.85)'
  }
};

const ModalComp = ({ modalComponents, children }) => {
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
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = (_, callback) => {
    setIsOpen(false);
    if (callback) {
      console.log(callback);
      callback();
    }
  };

  return (
    <ModalContext.Provider value={{
      afterOpenModal, closeModal, isOpen, openModal,
    }}
    >
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <>
          <div className="modalForm">
            {CurrentModal && <CurrentModal {...modalProps} openModal={openModal} />}
          </div>
        </>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

ModalComp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired
};

export default ModalComp;
