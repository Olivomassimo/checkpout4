import React from 'react';
import cirque1 from '../../asset/galrie/cirque1.jpg'
import cirque2 from '../../asset/galrie/cirque2.jpg'
import cirque3 from '../../asset/galrie/cirque3.jpg'
import cirque4 from '../../asset/galrie/cirque4.jpg'
import cirque5 from '../../asset/galrie/cirque5.jpg'
import cirque6 from '../../asset/galrie/cirque6.jpg'
import cirque7 from '../../asset/galrie/cirque7.jpg'
import cirque8 from '../../asset/galrie/cirque8.jpg'
import cirque9 from '../../asset/galrie/cirque9.jpg'
import cirque10 from '../../asset/galrie/cirque10.jpg'
import cirque11 from '../../asset/galrie/cirque11.jpg'
import cirque12 from '../../asset/galrie/cirque12.jpg'
import cirque13 from '../../asset/galrie/cirque13.jpg'
import cirque14 from '../../asset/galrie/cirque14.jpg'
import cirque15 from '../../asset/galrie/cirque15.jpg'

import {
  Card,
  CardImg,
  Row,
  Container,
  Col,
} from 'reactstrap';
import './index.css'


const Carte = (props) => {
  return (
    <div>
      <Container className='content'>
        <Row>
          <Col xs="4" sm="4">
            <Card className='carde'>
              <CardImg width="100%" src={cirque1} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque2} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque3} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="4">
            <Card className='carde'>
              <CardImg width="100%" src={cirque4} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque5} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque6} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="4">
            <Card className='carde'>
              <CardImg width="100%" src={cirque7} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque8} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque9} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="4">
            <Card className='carde'>
              <CardImg width="100%" src={cirque10} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque11} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque12} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="4">
            <Card className='carde'>
              <CardImg width="100%" src={cirque13} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque14} />
            </Card>
          </Col>
          <Col>
            <Card className='carde'>
              <CardImg width="100%" src={cirque15} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carte;