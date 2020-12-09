import styled from 'styled-components';

const Word = styled.div`
  margin: auto;
  min-height: 100vh;
  ${'' /* changer plus tard */}
  
  @media (min-width: 1250px) {
    max-width: 1250px;
  }

  .singleWord {
    display: grid;
    .dictionaryWord { grid-area: word}
    .sensesContainer {
      grid-area: sensesContainer;
    }

    font-size: 25px;


    @media (min-width: 1250px) {
      grid-template-areas: 
        "word word            ."
        ".    sensesContainer    .";
      
      grid-template-columns: 5% 65% 25%;

      .dictionaryWord {
        font-size: 1.7em;
      }

      .sensesContainer {
        .sense {
          padding-bottom: 20px;

          .pos {
            font-size: 0.7em;
          }
        
          .tags {
            font-size: 0.7em;
            margin-left: 15px;
          }

          .definitions {
            font-size: 1.15em;
          }
        }
      }
    }
  }
`

export default Word;
