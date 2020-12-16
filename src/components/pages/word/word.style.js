import styled from 'styled-components';

const Word = styled.div`
  margin: auto;
  min-height: 100vh;
  display: grid;
  font-size: 22px;

  
  @media (min-width: 1250px) {
    max-width: 1250px;
    grid-template-areas:
      "wordList kanjiList"
      "wordList kanjiList";

    grid-template-columns: 60% 40%;
    grid-column-gap: 20px;
  }

  .kanjiList {
    grid-area: kanjiList;
    display: flex;
    flex-direction: column;
    
    .kanjiInfo {
      border: 1px solid #ffffff;
      display: grid;
      padding: 15px;

      grid-template-areas:
        "kanji meanings references"
        "count meanings references"
        ".     meanings references";
      grid-template-columns: 105px auto 90px;
      
      .kanji, .strokeCount, .meanings, .references {
        line-height: 1.75em;
      }

      .kanji, .strokeCount {
        padding-right: 15px;
        text-align: center;
      }
      .kanji {
        grid-area: kanji;
        font-size: 3.0em;
      }

      .strokeCount {
        font-size: 0.6em;

      }

      .meanings {
        grid-area: meanings;
        font-size: 0.80em;
      }

      .references {
        grid-area: references;
        font-size: 0.7em;
        text-align: end;
      }
    }
  }

  .wordList {
    grid-area: wordList;
    .singleWord {
      display: grid;
      .dictionaryWord { grid-area: word; }
      .sensesContainer { grid-area: sensesContainer; }
      .otherForms {
        grid-area: otherForms;
        display: flex;
        flex-direction: column;
      }



      @media (min-width: 1250px) {
        margin-bottom: 40px;

        grid-template-areas: 
          "word word           "
          ".    sensesContainer"
          ".    otherForms     ";
        
        grid-template-columns: 5% 95%;
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
        
        .of-title {
          font-size: 0.6em;
        }

        .otherForms {
          font-size: 1.25em;
        }
      }
    }
  }
`

export default Word;
