let Visibility = 'show details';
const bigTitle = "hi";


let Details = () => {
  
  if (Visibility === 'show details'){
    Visibility = "Hide details"; 
  } else {
    Visibility = "show details"
  }
  showDetails()
};



const appRoot = document.getElementById('app');

const showDetails = () => {
  const template = (
    <div>
      <h1>bigTitle</h1>
      <button onClick={Details}>{Visibility}</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

showDetails();
