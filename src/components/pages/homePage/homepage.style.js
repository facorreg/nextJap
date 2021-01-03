import styled from 'styled-components';

const StyledHomePage = styled.div`
  @media (min-width: 1250px) {
    width: 1250px;
    ${'' /* border: 1px solid white; */}
    margin: auto;
    
    .dashboardMenu {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default StyledHomePage;