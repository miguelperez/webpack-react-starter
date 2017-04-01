import * as React from 'react';

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 'Some Nice Message from react',
    };
  }

  componentDidMount() {
    this.setState({message: this.state.message});
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="blue-background">{this.state.message}</h1>
      </div>
    );
  }
}
