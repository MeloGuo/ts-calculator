{
  function createButton(text: string, container: HTMLElement, className: string) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    if (className) {
      button.className = className
    }
    container.appendChild(button)
  }

  let container: HTMLDivElement = document.createElement('div')
  container.classList.add('calculator')
  document.body.appendChild(container)

  let output: HTMLDivElement = document.createElement('div')
  container.appendChild(output)
  let span: HTMLSpanElement = document.createElement('span')
  span.textContent = '0'
  output.appendChild(span)
  output.classList.add('output')

  let keys: Array<Array<string>> = [
    ['Clear', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  keys.forEach((textList: Array<string>) => {
    let div: HTMLDivElement = document.createElement('div')
    div.classList.add('row')
    textList.forEach((text: string) => {
      createButton(text, div, `button text-${text}`)
    })
    container.appendChild(div)
  })
}