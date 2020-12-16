import React from 'react';

const DisplayIfExists = (value, message) => (
  <>{value && <div>{message}{value}</div>}</>
)

const KanjiList = ({ kanjiList }) => (
  <div className="kanjiList">
    {
      kanjiList?.map(({
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
      }) => (
          <div className="kanjiInfo">
            <div className="kanji">{character}</div>
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
        ))
    }
  </div >
);

export default KanjiList;

