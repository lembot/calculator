import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <Row noGutters={true}>
      <Col>
        <Button
          block
          variant={'outline-dark'}
          disabled
          style={{
            borderRadius: '0',
            color: 'black'
          }}
        >
          <h2>Calculator</h2>
        </Button>
      </Col>
    </Row>
  )
}

export default Header