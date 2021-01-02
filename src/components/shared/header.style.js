import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 200px;
  display: flex;
  justify-content: flex-end;
  align-content: center;

  .menu {
    display: flex;
    flex-direct: column;
    
    div {
      font-family: 'Roboto', 'Noto Sans JP', sans-serif;
      margin: 20px;
      letter-spacing: 7px;
      font-size: 0.8em;
      line-height: 2.2em;
      max-height: 2.2em;
      cursor: pointer;
    }
  }
`;

const StyledMenuButton = styled.div`
  &:after {
    content: "${props => props.en}";
  }

  &:hover:after {
    content:" ${props => props.jp}";
  }
`;

export { StyledHeader, StyledMenuButton };