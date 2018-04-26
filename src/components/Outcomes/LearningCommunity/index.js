import React from 'react';
import { Row, Col, List, Icon, Table, Divider } from 'antd';

import { conceptMean, goals, selfGoals, columns, preparation, columns2, roles } from './lists';

const LearningCommunity = () => (
  <div className="tab-container">
    <Row>
      <Col xs={24} className="list-div">
        <h1 className="page-title">Learning Community</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <h2 className="page-subtitle">What does the concept of a journalistic learning community mean?</h2>
        <p>A journalism learning community has the following attributes:</p>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <List
          dataSource={conceptMean}
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
      <Col xs={24} className="list-div">
        <h2 className="page-subtitle">Overall goals for the journalism program</h2>
        <p>I have multiple goals for the students in the advanced program:</p>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <List
          dataSource={goals}
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
      <Col xs={24} className="list-div">
        <h2 className="page-subtitle">Goals for myself</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <List
          dataSource={selfGoals}
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
      <Col xs={24} className="list-div">
        <h2 className="page-subtitle">Preparation for working in this Learning Community</h2>
        <p>
          As in most professions, interns need a base of information
           before they can start working. The same way in journalism,
           students need an intensive program to give them the necessary
           skills so they can be part of the learning community and feel
           comfortable working with their peers.
        </p>
        <p>
          The students need to become proficient
          in a variety of ways in Beginning Journalism.
          The Beginning Journalism program gives students
          the necessary basic skills that they need to
          function in the Advanced Journalism learning
          community. Here is a chart of some of the skills:
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={24}>
        <Table columns={columns} dataSource={preparation} />
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col xs={24} className="list-div">
        <h2 className="page-subtitle">Beginning Journalism VS. Advanced Journalism:</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={24}>
        <Table columns={columns2} dataSource={roles} />
      </Col>
    </Row>
  </div>
)

export default LearningCommunity;
