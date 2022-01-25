class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a machine.</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <h2>Option Component Here</h2>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <h2>AddOption Component Here</h2>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
  </div>
 );

ReactDOM.render(jsx, document.getElementById('app'));