import React, { useContext } from 'react';
import { ModalContext } from 'context';

const DisplayIfExists = (value, message) => (
  <>{value && <div>{message}{value}</div>}</>
)

const KanjiList = ({ kanjiList }) => {
  const { openModal } = useContext(ModalContext);
  const onClickHandler = (props) => () => {
    openModal('kanji', props);
  };

  return (
    <div className="kanjiList">
      {
        kanjiList?.map((kanji, i) => {
          const {
            character,
            meaning,
            onyomi,
            kunyomi,
            strokes: {
              count,
            },
            video: {
              poster,
              video
            } = {},
            references: {
              jlpt,
              grade,
            } = {}
          } = kanji;
          return (
            <div className="kanjiInfo" key={i}>
              <div className="kanji" onClick={onClickHandler({ kanji })}>{character}</div>
              {
                count && <div className="strokeCount">strokes: {count}</div>
              }
              <div className="meanings">
                <div>{meaning}</div>
                <div>On: {onyomi || 'N/A'}</div>
                <div>Kun: {kunyomi || 'N/A'}</div>
              </div>
              <div className="references">
                {jlpt && <div>JLPT: {jlpt}</div>}
                {grade && <div>grade: {grade}</div>}
              </div>
            </div>
          );
        })
      }
    </div >
  );
}

export default KanjiList;

