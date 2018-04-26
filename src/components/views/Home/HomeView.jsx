import React, { Component } from 'react';
import { List, Row, Col, Icon, Divider, Carousel } from 'antd';

import { whyItWorks, distinguishes, ingredients, overcome, header } from './lists';
import './style.css';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Carousel autoplay>
          {header.map((item) => (
            <div>
              <div className="slider-header" style={{ background: `url(${item.image})` }}>
                <div className="overlay">
                  <h3>{item.title.toUpperCase()}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="view-container container home-view-container">
          <Row>
            <Col xs={24}>
              <h2 className="page-subtitle">The transformational power of a high school journalism program set up as a learning community - why it works.</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={24} className="list-div">
              <List
                dataSource={whyItWorks}
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
              <h2 className="page-subtitle">Why setting up the program as a learning community is the key to the success of the program.</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={24} className="list-div">
              <p>
                Most journalism programs in this country are considered
                the black sheep of the English department. No one wants
                to teach them because they don't want to be in a position of
                always fighting with the staff for control; they don't like
                the long hours associated with the program; they hate having
                their students work produced publicly for everyone to criticize.
                These problems are minimized when students are functioning in a student
                directed learning community. Few experts would disagree with the
                statement that the peer group takes on powerful a powerful role
                during the teenage years.
              </p>
              <p>
                If teachers, administrators, and community members would look at the
                tradeoffs, they would jump at the opportunity to get students highly
                motivated to excel.
              </p>
              <p>
                Journalism can motivate even the most recalcitrant student.
                I have had many students who hated school and who were
                not motivated. I have seen these same students transformed
                by the program. They changed from D students who cut often,
                hated learning to B or even A students; they started to care
                about the world because at last they felt they had a way to
                impact the real world. They felt respected and important.
              </p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col xs={24}>
              <h2 className="page-subtitle">What distinguishes a typical high school program from one set up as a learning community?</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={24} className="list-div">
              <List
                dataSource={distinguishes}
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
              <h2 className="page-subtitle">Impediments to a journalistic learning community:</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={24} className="list-div">
              <List
                dataSource={ingredients}
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
              <h2 className="page-subtitle">Ways to overcome the impediments:</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={24} className="list-div">
              <List
                dataSource={overcome}
                renderItem={(item) => (
                  <List.Item>
                    <Icon type="right" />
                    {item}
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeView;
