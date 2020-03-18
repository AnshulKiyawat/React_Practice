'use strict';

var appRoot = document.getElementById('app');
var visible = false;

var show = function show() {
    visible = !visible;
    Built_Visibility();
};

var Built_Visibility = function Built_Visibility() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: show },
            visible ? 'Show Details' : 'Hide Details'
        ),
        visible && React.createElement(
            'p',
            null,
            'Here is some Text'
        )
    );
    ReactDOM.render(template, appRoot);
};

Built_Visibility();
