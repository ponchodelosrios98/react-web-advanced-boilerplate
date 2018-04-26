import React from 'react';
import { Tabs, Row, Col } from 'antd';

import LearningCommunity from '../../Outcomes/LearningCommunity';
import Interdisciplinary from '../../Outcomes/Interdisciplinary';
import './style.css';
import Creed from '../../Outcomes/Creed';
import Testimonials from '../../Outcomes/Testimonials';
import Characteristics from '../../Outcomes/Characteristics';
import Fades from '../../Outcomes/Fades';

const { TabPane } = Tabs;

const OutcomesView = () => (
  <div className="container outcome-container">
    <Row>
      <Col xs={24}>
        <Tabs
          defaultActiveKey="1"
          tabPosition="top"
        >
          <TabPane tab="Learning Community" key="1">
            <LearningCommunity />
          </TabPane>
          <TabPane tab="How is Journalism Interdisciplinary?" key="2">
            <Interdisciplinary />
          </TabPane>
          <TabPane tab="The Journalist's Creed" key="3">
            <Creed />
          </TabPane>
          <TabPane tab="Student Testimonials" key="4">
            <Testimonials />
          </TabPane>
          <TabPane tab="Teacher fades to coach" key="5">
            <Fades />
          </TabPane>
          <TabPane tab="Characteristics of an effective classroom culture:" key="6">
            <Characteristics />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
);

export default OutcomesView;
