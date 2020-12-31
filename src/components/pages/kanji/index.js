import React from 'react';
import Image from 'next/image';
import KanjiPageStyle from './kanji.style';
import Furigana from 'components/furigana';

const KanjiPage = ({ kanji, isPage }) => {
  if (!kanji) return null;

  const {
    character,
    meaning,
    onyomi,
    kunyomi,
    strokes: {
      count,
      images,
    },
    video: {
      poster,
      video
    } = {},
    references: {
      jlpt,
      grade,
    } = {},
    examples = [],
  } = kanji;

  return (
    <KanjiPageStyle isPage={isPage}>
      <div className="kanjiInfo">
        {
          video
            ? (
              <video controls poster={poster}>
                <source src={video} />
              </video>
            )
            : <div className="kanji">{character}</div>
        }
        <div className="strokeCount">{`Strokes: ${count}`}</div>
      </div>
      <div className="meanings">
        {meaning}
        <div>On: {onyomi || 'N/A'}</div>
        <div>Kun: {kunyomi || 'N/A'}</div>
        <div className="strokes">
          <div className="imgContainer">
            {images.map((url) => (
              <div className="imgBorder">
                <div className="verticalLine" />
                <div className="horizontalLine" />
                <Image layout="fixed" height={100} width={100} src={url} alt="kanji" className="strokeImage" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="references">
        {jlpt && <div>JLPT: {jlpt}</div>}
        {grade && <div>grade: {grade}</div>}
      </div>
      <div className="examples">
        {examples.map(({ furigana, word, meaning, audio }) => (
          <div className="exContainer">
            <Furigana word={word} reading={furigana} cName="exWord" />
            <div className="exMeaning">{meaning}</div>
            { audio && (
              <audio controls>
                <source src={audio.audio} type={`audio/${audio.format}`} />
              </audio>
            )}
          </div>
        ))}
      </div>
    </KanjiPageStyle>
  );
}

export default KanjiPage;
