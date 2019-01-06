{
  class Calculator {
    public container: HTMLDivElement
    private span: HTMLSpanElement
    public n1: string = null
    public n2: string = null
    public operator: string = null
    public result: number = null
    public keys: Array<Array<string>> = [
      ['Clear', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=']
    ]

    constructor() {
      this.createContainer()
      this.createOutput()
      this.createButtons()
      this.bindEvents()
    }

    createButton(text: string, container: HTMLElement, className: string): HTMLButtonElement {
      let button: HTMLButtonElement = document.createElement('button')
      button.textContent = text
      if (className) {
        button.className = className
      }
      container.appendChild(button)
      return button
    }

    createContainer() {
      let container: HTMLDivElement = document.createElement('div')
      container.classList.add('calculator')
      document.body.appendChild(container)
      this.container = container
    }

    createOutput() {
      let output: HTMLDivElement = document.createElement('div')
      output.classList.add('output')
      let span: HTMLSpanElement = document.createElement('span')
      span.textContent = '0'
      output.appendChild(span)
      this.container.appendChild(output)
      this.span = span
    }

    createButtons() {
      this.keys.forEach((textList: Array<string>) => {
        let div: HTMLDivElement = document.createElement('div')
        div.classList.add('row')
        textList.forEach((text: string) => {
          this.createButton(text, div, `button text-${text}`)
        })
        this.container.appendChild(div)
      })
    }

    updateNumber(name: string, text: string) {
      if (this[name]) {
        this[name] += text
      } else {
        this[name] = text
      }
      this.span.textContent = this[name].toString()
    }

    updateNumbers(text: string) {
      if (this.operator) {
        this.updateNumber('n2', text)
      } else {
        this.updateNumber('n1', text)
      }
    }

    updateResult() {
      let result: any
      let n1: number = parseFloat(this.n1)
      let n2: number = parseFloat(this.n2)
      if (this.operator === '+') {
        result = n1 + n2
      } else if (this.operator === '-') {
        result = n1 - n2
      } else if (this.operator === '×') {
        result = n1 * n2
      } else if (this.operator === '÷') {
        result = n1 * n2
      }

      result = this.removeZero(result.toPrecision(7))
        
      if (n2 === 0) {
        result = '不是数字'
      }
      
      this.span.textContent = result
      this.n1 = null
      this.n2 = null
      this.operator = null
      this.result = result
    }

    removeZero(string: string): string {
      return string.replace(/\.?0+$/g, '').replace(/\.0+e/, 'e')
    }

    clearData() {
      this.n1 = null
      this.n2 = null
      this.operator = null
      this.result = null
      this.span.textContent = '0'
    }

    updateOperator(text: string) {
      if (this.n1 === null) {
        this.n1 = this.result.toString()
      }
      this.operator = text
    }

    updateNumberOrOperator(text: string) {
      if ('.0123456789'.indexOf(text) > -1) {
        this.updateNumbers(text)
      } else if ('+-×÷'.indexOf(text) > -1) {
        // 更新 operator
        this.updateOperator(text)
      } else if ('='.indexOf(text) > -1) {
        // 计算结果
        this.updateResult()
      } else if ('Clear'.indexOf(text) > -1) {
        // 清空当前数字
        this.clearData()
      } else {
        console.log('don\'t know')
      }
    }

    bindEvents() {
      this.container.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
          let button: HTMLButtonElement = event.target
          let text: string = button.textContent
          this.updateNumberOrOperator(text)
        }
      })
    }
  }

  new Calculator()
}