{
  class Calculator {
    public container: HTMLDivElement
    private output: HTMLDivElement
    private span: HTMLSpanElement
    public n1: number
    public n2: number
    public operator: string
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
      this.output = output
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

    bindEvents() {
      this.container.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
          let button: HTMLButtonElement = event.target
          let text: string = button.textContent
          if ('0123456789'.includes(text)) {
            if (this.operator) {
              // 更新 n2
              if (this.n2) {
                this.n2 = parseInt(this.n2.toString() + text)
              } else {
                this.n2 = parseInt(text)
              }
              this.span.textContent = this.n2.toString()
            } else {
              // 更新 n1
              if (this.n1) {
                this.n1 = parseInt(this.n1.toString() + text)
              } else {
                this.n1 = parseInt(text)
              }
              this.span.textContent = this.n1.toString()
            }
          } else if ('+-×÷'.includes(text)) {
            // 更新 operator
            this.operator = text
          } else if ('='.includes(text)) {
            // 计算结果
            let result: number
            if (this.operator === '+') {
              result = this.n1 + this.n2
            } else if (this.operator === '-') {
              result = this.n1 - this.n2
            } else if (this.operator === '×') {
              result = this.n1 * this.n2
            } else if (this.operator === '÷') {
              result = this.n1 * this.n2
            }
            this.span.textContent = result.toString()
          } else if ('Clear'.includes(text)) {
            // 清空当前数字
            this.n1 = 0
            this.n2 = 0
            this.span.textContent = '0'
          } else {
            console.log('don\'t know')
          }
        }
      })
    }
  }

  new Calculator()
}