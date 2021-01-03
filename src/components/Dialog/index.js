import React, { useContext } from 'react';
import styled from 'styled-components';
import StyledButton from 'components/ActionButton/button.style';
import { ModalContext } from 'context';

const StyledDialog = styled.div`
  display: flex;
  flex-direction: column;
  
  .title {
    border-bottom: 1px solid #CCCCCC;
    text-align: center;
    padding: 20px;
  }

  .question {
    font-size: 0.8em;
    padding: 20px;
  }

  .buttonContainer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

const StyledButtonDialog = styled(StyledButton)`
  margin: 10px;
  width: 115px;

  &.valid:hover {
    border: 2px solid #1FCE6D;
  }

  &.disagree:hover {
    border: 2px solid red;
  }
`

const Dialog = ({ questionMsg, validateMsg, disagreeMsg, dialogMsg, onValid }) => {
  const { closeModal } = useContext(ModalContext);
  return <StyledDialog>
    <div className="title">{dialogMsg}</div>
    <div className="question">{questionMsg}</div>
    <div className="buttonContainer">
      <StyledButtonDialog className="valid" onClick={onValid}>{validateMsg}</StyledButtonDialog>
      <StyledButtonDialog className="disagree" onClick={closeModal}>{disagreeMsg}</StyledButtonDialog>
    </div>
  </StyledDialog >
}

Dialog.propTypes = {
};

export default Dialog;