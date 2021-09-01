console.log('App.js is running!');

const app = {
  t: "Indecision App", 
  subtitle: "SUBTITLE", 
  options: ['one', 'two', 'three', 'four']
}

// JSX - JavaScript XML
const template = (
  <span>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'here are your options' : 'you have no optioons'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ol>
    <form>
    <input type="text" name="option"/>
    <button>Add Option</button>
    </form>
  </span>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); 
