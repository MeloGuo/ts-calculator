{
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }
    var container_1 = document.createElement('div');
    container_1.classList.add('calculator');
    document.body.appendChild(container_1);
    var n1_1;
    var n2_1;
    var operator_1;
    var output = document.createElement('div');
    container_1.appendChild(output);
    var span_1 = document.createElement('span');
    span_1.textContent = '0';
    output.appendChild(span_1);
    output.classList.add('output');
    container_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var button = event.target;
            var text = button.textContent;
            if ('0123456789'.includes(text)) {
                if (operator_1) {
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + text);
                    }
                    else {
                        n1_1 = parseInt(text);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-×÷'.includes(text)) {
                operator_1 = text;
            }
            else if ('='.includes(text)) {
                var result = void 0;
                if (operator_1 === '+') {
                    result = n1_1 + n2_1;
                }
                else if (operator_1 === '-') {
                    result = n1_1 - n2_1;
                }
                else if (operator_1 === '×') {
                    result = n1_1 * n2_1;
                }
                else if (operator_1 === '÷') {
                    result = n1_1 * n2_1;
                }
                span_1.textContent = result.toString();
            }
            else if ('Clear'.includes(text)) {
                n1_1 = 0;
                n2_1 = 0;
                span_1.textContent = '0';
            }
            else {
                console.log('don\'t know');
            }
            console.log(n1_1, operator_1, n2_1);
        }
    });
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton(text, div, "button text-" + text);
        });
        container_1.appendChild(div);
    });
}
