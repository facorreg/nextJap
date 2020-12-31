import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import escapeStringRegexp from 'escape-string-regexp';

const allKanji = /([一-龯]|\u3005)+/g;

const sliceFirst = (array) => (!isEmpty(array) ? array.slice(1) : array);

const stringWithFurigana = (word, furigana) => {
  const buildRuby = (w, f = '') => `<ruby>${w}<rt>${f}</rt></ruby>`;

  if (word && !furigana) return word;
  if (!word && furigana) return furigana;

  const regWord = word.startsWith('*') ? sliceFirst(word) : word;
  const reg = new RegExp(escapeStringRegexp(regWord).replace(allKanji, '(.*)'));
  const matchedFurigana = sliceFirst(furigana.match(reg)) || [];

  const callback = (kanji) => buildRuby(kanji, matchedFurigana.shift());

  return word.replace(allKanji, callback);
};

const Furigana = ({ word, reading, cName }) => {
  const actualWord = word || reading;
  const furigana = word ? reading : '';

  return (
    <div className={cName}
      dangerouslySetInnerHTML={{ __html: stringWithFurigana(actualWord, furigana) }}
    />
  )
}

Furigana.propTypes = {
  word: PropTypes.string,
  reading: PropTypes.string,
  cName: PropTypes.string
}

export default Furigana;
