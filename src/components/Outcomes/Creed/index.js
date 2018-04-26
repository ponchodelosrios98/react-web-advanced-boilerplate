import React from 'react';
import { Row, Col } from 'antd';

const Creed = () => (
  <div className="tab-container">
    <Row>
      <Col xs={24} className="list-div">
        <h1 className="page-title">The Journalist's Creed</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={24} className="list-div">
        <p>
          I believe in the profession of Journalism.
        </p>
        <p>
          I believe that the public journal is a public trust;
          that all connected with it are, to the full measure
          of responsibility, trustees for the public;
          that acceptance of lesser service than the public
          service is a betrayal of this trust.
        </p>
        <p>
          I believe that clear thinking, clear statement, accuracy
          and fairness are fundamental to good journalism.
        </p>
        <p>
          I believe that a journalist should write only what he holds
          in his heart to be true. I believe that suppression of the news,
          for any consideration other than the
          welfare of society, is indefensible.
        </p>
        <p>
          I believe that no one should write as a journalist what he would
          not say as a gentleman; that bribery
          by one's own pocket book is as much
          to be avoided as bribery by the pocketbook of another; that individual
          responsibility may not be escaped by pleading
          another's instructions or another's dividends.
        </p>
        <p>
          I believe that advertising, news and editorial
          columns should alike serve
          the best interests of readers; that a single
          standard of helpful truth and
          cleanness should prevail for all; that
          supreme test of good journalism is
          the measure of its public service.
        </p>
        <p>
          I believe that the journalism which
          succeeds the best-and best deserves success-fears
          God and honors man; is stoutly independent;
          <br />
          Unmoved by pride of opinion or greed of power;
          constructive, tolerant but never careless,
          self-controlled, patient, always respectful of
          its readers but always unafraid, is quickly indignant
          at injustice; is unswayed by the appeal of the privilege
          or the clamor of the mob; seeks to give every man a chance,
          and as far as law, an honest wage and recognition of human
          brotherhood can make it so, an equal chance; is profoundly
          patriotic while sincerely promoting international good will
          and cementing world-comradeship, is a journalism of humanity,
          of and for today's world.
        </p>
      </Col>
    </Row>
  </div>
);

export default Creed;
