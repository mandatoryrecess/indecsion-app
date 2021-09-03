"use strict";

console.log('App.js is running!');

var app = {
  t: "Indecision App",
  subtitle: "SUBTITLE",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOption();
  }
};
var appRoot = document.getElementById('app');

var renderOption = function renderOption() {
  var template = React.createElement(
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
      "p",
      null,
      app.options.length
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
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
// JSX - JavaScript XML

renderOption();
