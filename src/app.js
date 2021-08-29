console.log('App.js is running!');

let title = {
  name: "Indecision App", 
  info: "This is some info"
}

// JSX - JavaScript XML
var template = (
  <span>
    <h2>{title.name}</h2>
    <p>{title.info}</p>
  </span>
);
let user = {
  name: "RossBoss",
  location:"vancouver",
  age: 35,
}

var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
