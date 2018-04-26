import React from 'react';
import { Row, Col, List } from 'antd';

import { skills } from './lists';

const Interdisciplinary = () => (
  <div className="tab-container">
    <Row>
      <Col xs={24} className="list-div">
        <h1 className="page-title">How is journalism interdisciplinary?</h1>
        <p>
          Just to write a story, for example, about a
           speaker on campus, students will have to use the following skills:
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <List
          dataSource={skills}
          renderItem={(item, i) => (
            <List.Item>
              <p>
                <strong>{`${i + 1}.  `}</strong>
                {item}
              </p>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  </div>
);

export default Interdisciplinary;
