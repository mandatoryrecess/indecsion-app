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