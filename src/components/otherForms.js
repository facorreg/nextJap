import React from 'react';
import PropTypes from 'prop-types';

const OtherForms = ({ japanese }) => (
  <div className="otherForms">
    <i className="of-title">Other forms:</i>
    {
      japanese.map(({ word, reading }, i) => {
        const actualWord = word || reading;
        const furi = word ? `【${reading}】` : '';

        return <span key={i}>{`${actualWord}${furi}`}</span>
      })
    }
  </div>
)

OtherForms.propTypes = {
  japanese: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      reading: PropTypes.string,
    }),
  )
}

export default OtherForms;
