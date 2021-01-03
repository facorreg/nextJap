import styled from 'styled-components';

const StyledDecksTable = styled.table`
  width: 70%;
  margin: auto;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(auto, 190px) repeat(3, auto);
  border-radius: 10px;
  letter-spacing: 1px;
  margin-top: 45px;

  .col {
    font-size: 0.6em;
    line-height: 20px;
    text-overflow: ellipsis;
  }

  .col:not(:first-child) {
    text-align: end;
  }

  .col div {
    max-height: 20px;
  }

  .col div:first-child {
    background: #181A1B;
  }
  
  .col div:nth-child(2n+0), .col div:nth-child(2n+0) img {
    background: #4b4c4d;
  }

  .col div:nth-child(2n+1):not(:first-child), div:nth-child(2n+1):not(:first-child) img {
    background: #353637;
  }

  .col div {
    ${'' /* width: calc(100% - 30px); */}
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    padding: 15px;
  }
  .col div:first-child {
    border-bottom: 1px solid white;
    font-weight: bold;

  }

  img {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

export default StyledDecksTable;
