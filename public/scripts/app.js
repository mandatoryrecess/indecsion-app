"use strict";

var Visibility = 'show details';
var Explainer = "explaining 1";
var bigTitle = "hi";

var Details = function Details() {

  if (Visibility === 'show details') {
    Visibility = "Hide details";
    Explainer = "explaining 2";
  } else {
    Visibility = "show details";
    Explainer = "explaining 1";
  }
  showDetails();
};

var appRoot = document.getElementById('app');

var showDetails = function showDetails() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "bigTitle"
    ),
    React.createElement(
      "button",
      { onClick: Details },
      Visibility
    ),
    React.createElement(
      "p",
      null,
      Explainer
    )
  );

  ReactDOM.render(template, appRoot);
};

showDetails();
