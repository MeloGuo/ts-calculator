{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
            this.keys = [
                ['Clear', '÷'],
                ['7', '8', '9', '×'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['0', '.', '=']
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        Calculator.prototype.createButton = function (text, container, className) {
            var button = document.createElement('button');
            button.textContent = text;
            if (className) {
                button.className = className;
            }
            container.appendChild(button);
            return button;
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.classList.add('calculator');
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutput = function () {
            var output = document.createElement('div');
            output.classList.add('output');
            var span = document.createElement('span');
            span.textContent = '0';
            output.appendChild(span);
            this.container.appendChild(output);
            this.span = span;
        };
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.keys.forEach(function (textList) {
                var div = document.createElement('div');
                div.classList.add('row');
                textList.forEach(function (text) {
                    _this.createButton(text, div, "button text-" + text);
                });
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.updateNumber = function (name, text) {
            if (this[name]) {
                this[name] += text;
            }
            else {
                this[name] = text;
            }
            this.span.textContent = this[name].toString();
        };
        Calculator.prototype.updateNumbers = function (text) {
            if (this.operator) {
                this.updateNumber('n2', text);
            }
            else {
                this.updateNumber('n1', text);
            }
        };
        Calculator.prototype.updateResult = function () {
            var result;
            var n1 = parseFloat(this.n1);
            var n2 = parseFloat(this.n2);
            if (this.operator === '+') {
                result = n1 + n2;
            }
            else if (this.operator === '-') {
                result = n1 - n2;
            }
            else if (this.operator === '×') {
                result = n1 * n2;
            }
            else if (this.operator === '÷') {
                result = n1 * n2;
            }
            result = this.removeZero(result.toPrecision(7));
            if (n2 === 0) {
                result = '不是数字';
            }
            this.span.textContent = result;
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;
        };
        Calculator.prototype.removeZero = function (string) {
            return string.replace(/\.?0+$/g, '').replace(/\.0+e/, 'e');
        };
        Calculator.prototype.clearData = function () {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
            this.span.textContent = '0';
        };
        Calculator.prototype.updateOperator = function (text) {
            if (this.n1 === null) {
                this.n1 = this.result.toString();
            }
            this.operator = text;
        };
        Calculator.prototype.updateNumberOrOperator = function (text) {
            if ('.0123456789'.indexOf(text) > -1) {
                this.updateNumbers(text);
            }
            else if ('+-×÷'.indexOf(text) > -1) {
                // 更新 operator
                this.updateOperator(text);
            }
            else if ('='.indexOf(text) > -1) {
                // 计算结果
                this.updateResult();
            }
            else if ('Clear'.indexOf(text) > -1) {
                // 清空当前数字
                this.clearData();
            }
            else {
                console.log('don\'t know');
            }
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (event) {
                if (event.target instanceof HTMLButtonElement) {
                    var button = event.target;
                    var text = button.textContent;
                    _this.updateNumberOrOperator(text);
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
