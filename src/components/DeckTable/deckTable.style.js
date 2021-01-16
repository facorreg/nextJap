import styled from 'styled-components';

const StyledDecksTable = styled.table`
  width: 70%;
  margin: auto;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  letter-spacing: 1px;
  margin-top: 45px;
  border-spacing: 0;
  
  .tabTitle {
    background: #181A1B;
  }

  td, th {
    text-align: start;
    font-size: 0.6em;
    line-height: 20px;
    text-overflow: ellipsis;

    .icon {
      position: relative;
      img {
        cursor: pointer;
      }
    }
  }

  td:not(:first-child), th:not(:first-child) {
    text-align: end;
  }

  td, th {
    padding: 10px;
  }

  td div {
    max-height: 20px;
  }

  tr:nth-child(2n+0), tr:nth-child(2n+0) img {
    background: #4b4c4d;
  }

  tr:nth-child(2n+1):not(:first-child)r:nth-child(2n+1):not(:first-child) img {
    background: #353637;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .icon :not(:last-of-type), form {
    margin-right: 10px;
  }

  .invertColor {
    filter: invert(1);
  }

  input[type=file] {
    display: none;
  }
`;

export default StyledDecksTable;
