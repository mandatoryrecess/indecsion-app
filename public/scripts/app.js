'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'span',
  null,
  React.createElement(
    'h2',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hellllooo Rossanne'
  ),
  React.createElement(
    'p',
    null,
    'Age: 35'
  ),
  React.createElement(
    'p',
    null,
    'Location: Vancouver'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
