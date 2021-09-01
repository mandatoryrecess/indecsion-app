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
    app.title
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
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    ),
    React.createElement(
      "li",
      null,
      "Item Three"
    )
  ),
  React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add Option"
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
