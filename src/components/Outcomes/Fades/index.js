/* eslint-disable */
import React from 'react';
import { Row, Col, List, Icon, Divider } from 'antd';

import fades from './lists';

const Fades = () => (
  <div className="tab-container">
    <Row>
      <Col xs={24} className="list-div">
        <h1 className="page-title">Teacher fades to coach</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <p>
          It easy for a teacher to fade to coach
          if the following factors are in place:
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <List
          dataSource={fades}
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
          Each of these is first established in the beginning journalism program
          and then furthered in the advanced journalism program. The teacher's
          role is changed from actively teaching to modeling these behaviors and
          then "advising" students when there are problems.
        </p>
        <p>
          The fact that the teacher acts as adviser promotes the students feelings of competence and authority. Adults do not teach each other; they advise each other and collaborate with one another. When the teacher moves to this role, he/she sends the student a message that they are on the same level.
        </p>
        <p>
          Being treated as equal by the teacher is an empowering gift for students. It makes them feel important, smart, and capable. That does not mean that the teacher lowers him/herself to the level of the students and starts acting and dressing like students. On the contrary, the teacher's actions as adviser raise the level of the student to the level of the adviser. Teachers, who lower themselves to the level of the students, only demean themselves and lose the respect of their students. In turn, the students lose respect for themselves.
        </p>
        <p>
          I cannot stress strongly enough that teachers who are in the process of fading to the role should act as advisers or in the same way they would act with colleagues they are advising or student teachers they are coaching. Never lower yourself to the level of the students.
        </p>
        <p>
          Fading to coach is an essential element for a learning community. Every member of the learning community has to have a defined role in which they are expert. The fact that the teacher will advise but not do the work for the students promotes the competence of each student in that role.
        </p>
        <Divider />
        <p>
          For example:
        </p>
        <p>
          The Business Manager is responsible for all the bookkeeping for the paper. That means that when I get bills, I simply put them on his desk. I ask for an accounting once a month and he gives a report to the class once every few weeks so that all students are aware of the financial state of the paper. But I will only step in as adviser. I will not write bills for him nor make out deposit slips. I will not balance the books for him. If the student fails to do his job, the group pressure is very strong. I also have been known to say, "We don't have enough money to publish a paper this month because of...." It is amazing how quickly everything gets resolved.
        </p>
      </Col>
    </Row>
  </div>
);

export default Fades;
