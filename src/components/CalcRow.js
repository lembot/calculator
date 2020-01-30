import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CalcRow = ({action, items}) => {
  let buttons = items.map((item, index) => {
    return (
      <Col
        key={index}
      >
        <Button
          variant={'outline-dark'}
          size={'lg'}
          onClick={(key) => {action(key)}}
          block
          style={{
            borderRadius: '0'
          }}
        >
          {item}
        </Button>
      </Col>
    )
  })

  return (
    <Row noGutters={true}>
      {buttons}
    </Row>
  )
}

export default CalcRow