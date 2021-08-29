console.log('App.js is running!');

let app = {
  name: "Indecision App", 
  subtitle: "This is some info", 
  options: ['one', 'two']
}

// JSX - JavaScript XML
var template = (
  <span>
  <h1> {app.title ? app.title: app.title} </h1>
  {app.subtitle ? <p>{app.subtitle}</p>: undefined}
  </span>
);
let user = {
  name: "RossBoss",
  location:"Miami",
  age: 3,
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>; 
  } 
}

var template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}</p>
    <p>{getLocation(user.location)}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
