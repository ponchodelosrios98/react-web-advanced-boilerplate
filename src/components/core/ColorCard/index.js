import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ColorCard = ({ children }) => (
  <div className="card-view">
    <div className="brand-card">
      <div className="blue-card">
        <div className="white-card">
          {children}
        </div>
      </div>
    </div>
  </div>
);

ColorCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ColorCard;
