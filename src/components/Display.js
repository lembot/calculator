import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Display = ({num}) => {
  return (
    <Row noGutters={true}>
      <Col>
        <Card
          bg={'dark'}
          text={'white'}
          style={{
            borderRadius: '0'
          }}
        >
          <Card.Header>{num.toString()}</Card.Header>
        </Card>
      </Col>
    </Row>
  )
}

export default Display