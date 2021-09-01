"use strict";

console.log('App.js is running!');

var app = {
  t: "Indecision App",
  subtitle: "SUBTITLE",
  options: ['one', 'two', 'three', 'four']

  // JSX - JavaScript XML
};var template = React.createElement(
  "span",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    app.title,
    " "
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? 'here are your options' : 'you have no optioons'
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      app.options
    )
  )
);
var count = 0;
var addOne = function addOne() {
  count++;
  resnderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  resnderCounterApp();
};
var reset = function reset() {
  count = 0;
  resnderCounterApp();
};

var appRoot = document.getElementById('app');

var resnderCounterApp = function resnderCounterApp() {
  var TemplateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne, className: "button" },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne, className: "button" },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset, className: "button" },
      "reset"
    )
  );
  ReactDOM.render(TemplateTwo, appRoot);
};

resnderCounterApp();
