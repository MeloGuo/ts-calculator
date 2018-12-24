{
  // 声明创建按钮
  function createButton(text: string, container: HTMLElement, className: string) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    if (className) {
      button.className = className
    }
    container.appendChild(button)
    return button
  }

  // 创建 container
  let container: HTMLDivElement = document.createElement('div')
  container.classList.add('calculator')
  document.body.appendChild(container)

  // 声明 n1 n2 oprator
  let n1: number
  let n2: number
  let operator: string

  // 创建 output
  let output: HTMLDivElement = document.createElement('div')
  container.appendChild(output)

  // 创建 output 中 span
  let span: HTMLSpanElement = document.createElement('span')
  span.textContent = '0'
  output.appendChild(span)
  output.classList.add('output')
  container.addEventListener('click', (event) => {
    if (event.target instanceof HTMLButtonElement) {
      let button: HTMLButtonElement = event.target
      let text: string = button.textContent
      if ('0123456789'.includes(text)) {
        if (operator) {
          // 更新 n2
          if (n2) {
            n2 = parseInt(n2.toString() + text)
          } else {
            n2 = parseInt(text)
          }
          span.textContent = n2.toString()
        } else {
          // 更新 n1
          if (n1) {
            n1 = parseInt(n1.toString() + text)
          } else {
            n1 = parseInt(text)
          }
          span.textContent = n1.toString()
        }
      } else if ('+-×÷'.includes(text)) {
        // 更新 operator
        operator = text
      } else if ('='.includes(text)) {
        // 计算结果
        let result: number
        if (operator === '+') {
          result = n1 + n2
        } else if (operator === '-') {
          result = n1 - n2
        } else if (operator === '×') {
          result = n1 * n2
        } else if (operator === '÷') {
          result = n1 * n2
        }
        span.textContent = result.toString()
      } else if ('Clear'.includes(text)) {
        // 清空当前数字
        n1 = 0
        n2 = 0
        span.textContent = '0'
      } else {
        console.log('don\'t know')
      }
      console.log(n1, operator, n2)
    }
  })

  // 声明按钮内容
  let keys: Array<Array<string>> = [
    ['Clear', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  // 创建按钮并插入页面
  keys.forEach((textList: Array<string>) => {
    let div: HTMLDivElement = document.createElement('div')
    div.classList.add('row')
    textList.forEach((text: string) => {
      createButton(text, div, `button text-${text}`)
    })
    container.appendChild(div)
  })
}