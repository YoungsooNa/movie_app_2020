import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('Hello');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  }
  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("deleted");
  }
  render() {
    console.log('redner');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}
export default App;
