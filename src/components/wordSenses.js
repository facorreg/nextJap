import React from 'react';

const WordSenses = ({ senses }) => (
  <div className="sensesContainer">
    {
      senses.map(({ partsOfSpeech, definitions, tags }, i) => (
        <div className="sense" key={i}>
          <i className="pos">{partsOfSpeech}</i>
          <div className="definitions">{definitions}</div>
          <i className="tags">{tags}</i>
        </div>
      ))
    }
  </div>
)

export default WordSenses;
