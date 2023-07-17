import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
   this.onSubmit = this.onmSubmit.bind(this);
  }
  handleChange = (eve) => {
    this.setState({ text: eve.target.value });
  };

  onSubmit = (eve) => {
    eve.preventDefault();
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.text],
      text: ""
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          //array that returns as a list item //
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
