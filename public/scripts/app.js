"use strict";

console.log('App.js is running!');

var app = {
  name: "Indecision App",
  subtitle: "This is some info",
  options: ['one', 'two']

  // JSX - JavaScript XML
};var template = React.createElement(
  "span",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    app.title ? app.title : app.title,
    " "
  ),
  app.subtitle ? React.createElement(
    "p",
    null,
    app.subtitle
  ) : undefined
);
var user = {
  name: "RossBoss",
  location: "Miami",
  age: 3
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    "p",
    null,
    user.age && user.age >= 18 && React.createElement(
      "p",
      null,
      "Age: ",
      user.age
    )
  ),
  React.createElement(
    "p",
    null,
    getLocation(user.location)
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
