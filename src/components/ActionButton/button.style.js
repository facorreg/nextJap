import styled from 'styled-components';

const StyledButton = styled.button`
  height: 50px;
  width: 150px;
  margin: 25px 10px;
  border: 1px solid white;
  background: transparent;
  color: white;
  border-radius: 5%;
  cursor: pointer;
  letter-spacing: 3px;
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;

  &:after {
    content: "${props => props.en}";
  }

  &:hover:after {
    content:" ${props => props.jp}";
  }

  &:hover {
    border: 2px solid white;
  }
`;

export default StyledButton;
