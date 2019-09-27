import React from "react";

import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ""
    };
  }

  componentWillMount() {
    this.setState({
      nome: "React"
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.nome}</h1>
      </React.Fragment>
    );
  }
}

export default App;