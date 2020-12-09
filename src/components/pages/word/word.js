import React from 'react';
import Furigana from 'components/furigana';
import WordSenses from 'components/wordSenses';
import WordStyle from './word.style';

const WordPage = (props) => (
  <WordStyle>
    {
      props?.word?.map(({ japanese, senses }) => {

        const [{ word, reading }, ...rest] = japanese;

        return (
          <div className="singleWord">
            <Furigana word={word} reading={reading} cName="dictionaryWord" />
            <WordSenses senses={senses} />

          </div>
        );
      })
    }
  </WordStyle>
)

export default WordPage;
