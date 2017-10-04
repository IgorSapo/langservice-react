import React from 'react';
import './FieldTitle.css';

const FieldTitle = ({ number, text }) => (
  <div className="field-title">
    <span className="label-circular-number">{number}</span>
    <label className="label-text" htmlFor="">
      {text}
    </label>
  </div>
);

export default FieldTitle;
