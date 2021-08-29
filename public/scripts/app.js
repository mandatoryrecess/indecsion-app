"use strict";

console.log('App.js is running!');

var title = {
  name: "Indecision App",
  info: "This is some info"

  // JSX - JavaScript XML
};var template = React.createElement(
  "span",
  null,
  React.createElement(
    "h2",
    null,
    title.name
  ),
  React.createElement(
    "p",
    null,
    title.info
  )
);
var user = {
  name: "RossBoss",
  location: "vancouver",
  age: 35
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
