import React from 'react';
import PropTypes from 'prop-types';
import Furigana from 'components/furigana';
import WordSenses from 'components/wordSenses';
import OtherForms from 'components/otherForms';
import KanjiList from 'components/kanjiList';
import WordStyle from './word.style';

const WordPage = (props) => {
  const { word, kanjiList } = props;

  return (
    <WordStyle>
      <div className="wordList">
        {
          word?.map(({ japanese, senses }, i) => {
            const [{ word, reading }, ...rest] = japanese;

            return (
              <div className="singleWord" key={i}>
                <Furigana word={word} reading={reading} cName="dictionaryWord" />
                <WordSenses senses={senses} />
                { rest.length ? <OtherForms japanese={rest} /> : null}
              </div>
            );
          })
        }
      </div>
      <KanjiList kanjiList={kanjiList} />
    </WordStyle>
  );
}

WordPage.propTypes = {
  word: PropTypes.arrayOf(
    PropTypes.shape({
      japanese: PropTypes.arrayOf(
        PropTypes.shape({
          word: PropTypes.string,
          reading: PropTypes.string,
        }),
      ),
      senses: PropTypes.arrayOf(
        PropTypes.shape({
          tags: PropTypes.string,
          definitions: PropTypes.arrayOf(PropTypes.string),
          partsOfSpeech: PropTypes.string,
          examples: PropTypes.arrayOf(PropTypes.string)
        })
      ),
      kanjiIds: PropTypes.arrayOf(PropTypes.string),
    })
  )
}

export default WordPage;
