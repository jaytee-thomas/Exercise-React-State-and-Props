import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      list: [...prevState.list, prevState.text],
      text: "",
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
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
