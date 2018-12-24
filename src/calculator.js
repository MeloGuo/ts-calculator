{
    // 声明创建按钮
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }
    // 创建 container
    var container_1 = document.createElement('div');
    container_1.classList.add('calculator');
    document.body.appendChild(container_1);
    // 声明 n1 n2 oprator
    var n1_1;
    var n2_1;
    var operator_1;
    // 创建 output
    var output = document.createElement('div');
    container_1.appendChild(output);
    // 创建 output 中 span
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
                    // 更新 n2
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    // 更新 n1
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
                // 更新 operator
                operator_1 = text;
            }
            else if ('='.includes(text)) {
                // 计算结果
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
                // 清空当前数字
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
    // 声明按钮内容
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    // 创建按钮并插入页面
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton(text, div, "button text-" + text);
        });
        container_1.appendChild(div);
    });
}
