import React from 'react';
import { Row, Col, List, Icon, Divider } from 'antd';

import character from './lists';

const Characteristics = () => (
  <div className="tab-container">
    <Row>
      <Col xs={24} className="list-div">
        <h1 className="page-title">Characteristics of an effective classroom culture</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <p>
          How does a teacher establish a culture that promotes learning and makes teaching a pleasure instead of a battle?
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <List
          dataSource={character}
          renderItem={(item) => (
            <List.Item>
              <Icon type="right" />
              {item}
            </List.Item>
          )}
        />
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col xs={24}>
        <p>
          Teachers think that if they remember to celebrate the birthdays
          of students they are caring about that student on a personal level.
          While that is a step in the right direction, just having birthday
          celebrations does not make a student feel like they are part of a
          group. There needs to be regular daily interaction with students.
        </p>
      </Col>
    </Row>
  </div>
);

export default Characteristics;
