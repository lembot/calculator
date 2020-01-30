export default class Calculator {
  constructor() {
    this.stored = 0
    this.operation = null
    this.current = 0
  }

  getCurrent() {
    return parseInt(this.current)
  }

  doOperation(operation) {
    switch (operation) {
      case '+':
        this.stored = this.stored + parseInt(this.current)
        break
      case '-':
        this.stored = this.stored - parseInt(this.current)
        break
      case '/':
        this.stored = this.stored / parseInt(this.current)
        if (this.stored === Infinity) {
          this.stored = 0
        }
        break
      case '*':
        this.stored = this.stored * parseInt(this.current)
        break
      default:
        // Don't do anything...
        break
    }
    this.operation = null
  }

  selectOperation(operation) {
    if (operation === '=') {
      this.doOperation(this.operation)
      this.current = this.stored
      this.stored = 0
    } else if (operation === 'CLR') {
      this.stored = 0
      this.operation = null
      this.current = 0
    } else {
      this.operation = operation
      this.stored = parseInt(this.current)
      this.current = 0
    }
  }

  selectNumber(number) {
    if (!`${number}`.match(/[0-9]/)) {
      return
    }
    if (this.current !== null) {
      this.current = `${this.current}${number}`
    } else {
      this.current = number
    }
  }
}