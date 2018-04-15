import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './style.css';
import ColorCard from '../../core/ColorCard';

import thumbImage from '../../../img/home_image.png';
import CampaignCard from '../../campaigns/CampaignCard';

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="view-container container home-view-container">
        <Row className="header">
          <Col sm={24} md={15} className="text-div" >
            <p className="important">Hoy es un buen día para</p>
            <h1>salvar vidas.</h1>
            <p>
              Blooders es la primera plataforma para mejorar
              la experiencia de donar sangre y conectar a personas
              que necesitan sangre con donantes y hospitales.
            </p>
          </Col>
          <Col xs={24} sm={9} justify="center">
            <ColorCard>
              <img className="thumb" src={thumbImage} alt="Thumb" />
              <p className="hashtag">#SomosBlooders</p>
            </ColorCard>
          </Col>
        </Row>
        <Row className="section">
          <CampaignCard />
        </Row>
      </div>
    );
  }
}

export default Plans;
