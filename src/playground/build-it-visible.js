let Visibility = 'show details';
let Explainer = "explaining 1";
const bigTitle = "hi";


let Details = () => {
  
  if (Visibility === 'show details'){
    Visibility = "Hide details";
    Explainer = "explaining 2";
  } else {
    Visibility = "show details"
    Explainer = "explaining 1";
  }
  showDetails()
};



const appRoot = document.getElementById('app');

const showDetails = () => {
  const template = (
    <div>
      <h1>bigTitle</h1>
      <button onClick={Details}>{Visibility}</button>
      <p>{Explainer}</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

showDetails();
