console.log("app.js is running");

var template = <p>This is jsx from app.js!</p>;
var appRoot= document.getElementById('app');

ReactDom.render(template, appRoot);