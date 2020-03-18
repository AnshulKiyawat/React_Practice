'use strict';

var app = {
    options: [],
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer'
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.Option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.Option.value = '';
        render();
    }
};

var onMakeDecision = function onMakeDecision() {
    var random_num = Math.floor(Math.random() * app.options.length);

    var option = app.options[random_num];

    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What Should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove-All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'Option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
