console.log('App.js is running!');

const app = {
  t: "Indecision App", 
  subtitle: "SUBTITLE", 
  options: ['one', 'two', 'three', 'four']
}

// JSX - JavaScript XML
const template = (
  <span>
  <h1> {app.title} </h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'here are your options' : 'you have no optioons'}</p>
    <ol>
      <li>{app.options}</li>
    </ol>
  </span>
);
const user = {
  name: "RossBoss",
  location:"Miami",
  age: 3,
}


function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>; 
  } 
}

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}</p>
    <p>{getLocation(user.location)}</p>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
