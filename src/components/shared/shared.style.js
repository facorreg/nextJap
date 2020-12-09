import { createGlobalStyle } from 'styled-components';

const Shared = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap');
  
  body {
    color: white;
    background: #181A1B;
    font-size: 30px;
    font-family: 'Roboto', 'Noto Serif JP', sans-serif;
    margin: 0;
    position: relative;
  }
`;

export default Shared;