console.log('App.js is running!');

const app = {
  title: "Indecision App", 
  subtitle: "SUBTITLE", 
  options: []
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option); 
    e.target.elements.option.value = '';
    renderOption();
  }
};

const removeButton = () => {

   app.options = []; 

  renderOption();
};

const appRoot = document.getElementById('app');

const renderOption = () => {
  const template = (
    <span>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'here are your options' : 'you have no options'}</p>
    <button onClick={removeButton}>Remove</button>
    <p>{app.options.length}</p>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
      </form>

     
    </span>

  );
      ReactDOM.render(template, appRoot); 

};
// JSX - JavaScript XML

renderOption();
