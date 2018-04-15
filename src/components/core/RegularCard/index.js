import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

import './style.css';

const ReglularCard = ({ children, thumb }) => (
  <Col sm={24} md={8} className="white-card">
    {thumb ?
      <div
        src={thumb}
        alt="Card Thumb"
        className="thumb"
        style={{ background: `url(${thumb})` }}
      >
        <div />
      </div>
      :
      undefined
    }
    <div className="body">
      {children}
      <button className="callToAction">Ayudar a Esther</button>
    </div>
  </Col>
);

ReglularCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ReglularCard;
