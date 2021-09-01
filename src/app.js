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
let count = 0;
const addOne = () => {
  count++;
resnderCounterApp()
};
const minusOne = () => {
  count--;
  resnderCounterApp()
}
const reset = () => {
  count = 0;
  resnderCounterApp()
}


const appRoot = document.getElementById('app');



const resnderCounterApp = () => {
  const TemplateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} className="button">+1</button>
    <button onClick={minusOne} className="button">-1</button>
    <button onClick={reset} className="button">reset</button>
    </div>
  );
  ReactDOM.render(TemplateTwo, appRoot);
};

resnderCounterApp();