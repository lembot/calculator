import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Display from './Display'
import CalcRow from './CalcRow'
import CalcRowBottom from './CalcRowBottom'
import Calculator from '../calculator'
import Header from './Header'
import Button from 'react-bootstrap/Button'


let calc = new Calculator()

const Main = () => {
  const [calcDisplay, updateDisplay] = useState(0)

  let calcButtonPress = (event) => {
    let allowedOperations = ['CLR','+/-','%','/','*','-','+','=']
    if (allowedOperations.includes(event.target.innerHTML)) {
      calc.selectOperation(event.target.innerHTML)
    } else {
      calc.selectNumber(event.target.innerHTML)
    }
    updateDisplay(calc.getCurrent())
  }

  return (
    <Container
      style={{
        width: '400px',
        marginTop: '10px'
      }}
    >
      <Header />
      <Display num={calcDisplay}/>
      <CalcRow action={calcButtonPress} items={['CLR','+/-','%','/']}/>
      <CalcRow action={calcButtonPress} items={[7,8,9,'*']}/>
      <CalcRow action={calcButtonPress} items={[4,5,6,'-']}/>
      <CalcRow action={calcButtonPress} items={[1,2,3,'+']}/>
      <CalcRowBottom action={calcButtonPress} items={[0,'=']}/>
    </Container>
  )
}

export default Main
