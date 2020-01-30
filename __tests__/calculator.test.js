import Calculator from "../src/calculator.js"

describe('basic interactivity', () => {

  test('select a number', () => {
    let calc = new Calculator()
    calc.selectNumber(1)
    expect(calc.getCurrent()).toBe(1)
  })

  test ('ignores non-digit entries', () => {
    let calc = new Calculator()
    calc.selectNumber('e')
    expect(calc.getCurrent()).toBe(0)
  })

  test('clear all', () => {
    let calc = new Calculator()
    calc.selectNumber(9)
    calc.selectOperation('DIVIDE')
    calc.selectNumber(3)
    calc.selectOperation('CLEAR')
    expect([
      calc.stored,
      calc.operation,
      calc.current
    ]).toEqual([
      0,
      null,
      0
    ])
  })
})

describe('do math', () => {
  
  test('add int', () => {
    let calc = new Calculator()
    calc.selectNumber(4)
    calc.selectOperation('ADD')
    calc.selectNumber(5)
    calc.selectOperation('EQUALS')
    expect(calc.getCurrent()).toBe(9)
  })

  test('subtract int', () => {
    let calc = new Calculator()
    calc.selectNumber(4)
    calc.selectOperation('SUBTRACT')
    calc.selectNumber(5)
    calc.selectOperation('EQUALS')
    expect(calc.getCurrent()).toBe(-1)
  })

  test('multiply int', () => {
    let calc = new Calculator()
    calc.selectNumber(4)
    calc.selectOperation('MULTIPLY')
    calc.selectNumber(5)
    calc.selectOperation('EQUALS')
    expect(calc.getCurrent()).toBe(20)
  })

  test('divide int', () => {
    let calc = new Calculator()
    calc.selectNumber(9)
    calc.selectOperation('DIVIDE')
    calc.selectNumber(3)
    calc.selectOperation('EQUALS')
    expect(calc.getCurrent()).toBe(3)
  })
})