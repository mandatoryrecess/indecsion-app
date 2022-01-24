'use strict';

var Visibility = 'show details';
var bigTitle = "hi";

var Details = function Details() {

  if (Visibility === 'show details') {
    Visibility = "Hide details";
  } else {
    Visibility = "show details";
  }
  showDetails();
};

var appRoot = document.getElementById('app');

var showDetails = function showDetails() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'bigTitle'
    ),
    React.createElement(
      'button',
      { onClick: Details },
      Visibility
    )
  );

  ReactDOM.render(template, appRoot);
};

showDetails();
