{
    function createButton(text, container) {
        var button = document.createElement('button');
        button.textContent = text;
        container.appendChild(button);
    }
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        textList.forEach(function (text) {
            createButton(text, div);
        });
        document.body.appendChild(div);
    });
}
