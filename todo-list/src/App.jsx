import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
