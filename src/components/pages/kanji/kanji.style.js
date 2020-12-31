import styled from 'styled-components';

const kanjiStyle = styled.div`
  display: grid;

  @media (min-width: 1250px) {
    width: 100vw;
    max-width: 1250px;
    grid-template-areas:
      'kanjiInfo meanings     ref'
      '.         meanings     .'
      '.         examples     .';
  
    grid-template-columns: 15% 70% 15%;
    margin: ${props => props.isPage ? 'auto' : '20px'};


    .kanjiInfo {
      display: flex;
      flex-direction: column;
      grid-area: kanjiInfo;
      
      div {
        margin-left: -10px;
        text-align: center;
      }

      .kanji {
        margin-top: -35px;
        font-size: 4.5em; 
      }

      .strokeCount {
        font-size: 0.65em;
      }

      video {
        margin: 20px auto;
        height: 150px;
        width: 150px;
        filter: invert(1);
      }

    }

    .meanings {
      font-size: 0.7em;
      grid-area: meanings;

      .strokes {
        grid-area: strokes;
        display: grid;

        margin: 20px 0;
        grid-template-columns: 1fr 8fr 1fr;
        
        .imgContainer {
          display: flex;
          margin: auto;
          grid-column: 2;
          overflow: auto;
          padding: auto;
          max-width: 100%;
          
          .imgBorder {
            position: relative;
            max-height: 100px;
            ${'' /* height: auto; */}

            .horizontalLine {
              position: absolute;
              top: 0;
              left: 0;
              height: 50%;
              width: 100%;
              border-bottom: 1px white dotted;
            }

            .verticalLine {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 50%;
              border-right: 1px white dotted;
            }
          }

          .strokeImage {
            border: 1px solid black !important;
            filter: invert(1);
          }
        }
      }
    }

    .references {
      font-size: 0.6em;
      grid-area: ref;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .examples {
      grid-area: examples;
      width: 100%;
      font-size: 0.8em;
      row-gap: 10px;
      display: grid;
      margin: 20px 0;

     .exContainer {
      display: grid;
      grid-template-columns: 30% 52% 18%;
      grid-template-areas: 
        "exWord exMeaning exSound";

      width: 100%;

      .exWord {
        grid-area: exWord;
      } 

      .exMeaning {
        grid-area: exMeaning;
      }
      
      .exSound {
        grid-area: exSound;
      }

      audio {
        filter: invert(0.8);
        width: 100%;
      }
    }
  }
`

export default kanjiStyle;
