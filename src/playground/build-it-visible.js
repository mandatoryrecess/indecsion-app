let visibility = false; 
const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
    <h1>HELLO</h1>
      <button onClick={toggleVisibility}>
      {visibility ? 'Hide details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>These are some details you can now see</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
