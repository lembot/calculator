import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CalcRowWeird = ({action, items}) => {
  return (
    <Row noGutters={true}>
      <Col xs={9}>
        <Button
          variant={'outline-dark'}
          size={'lg'}
          onClick={(key) => {action(key)}}
          block
          style={{
            borderRadius: '0'
          }}
        >
          {items[0]}
        </Button>
      </Col>
      <Col xs={3}>
        <Button
          variant={'outline-dark'}
          size={'lg'}
          onClick={(key) => {action(key)}}
          block
          style={{
            borderRadius: '0'
          }}
        >
          {items[1]}
        </Button>
      </Col>
    </Row>
  )
}

export default CalcRowWeird