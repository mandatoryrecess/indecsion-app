console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <span>
    <h2>Indecision App</h2>
    <p>This is some info</p>
  </span>
);
var template2 = (
  <div>
    <h1>Hellllooo Rossanne</h1>
    <p>Age: 35</p>
    <p>Location: Vancouver</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
