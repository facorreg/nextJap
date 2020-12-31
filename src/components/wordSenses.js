import React from 'react';
import PropTypes from 'prop-types';

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

WordSenses.propTypes = {
  senses: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string,
      definitions: PropTypes.string,
      partsOfSpeech: PropTypes.string,
      examples: PropTypes.arrayOf(PropTypes.string)
    })
  ),
}

export default WordSenses;
