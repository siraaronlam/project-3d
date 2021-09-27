import React, { Component as ReactComponent } from 'react';

export default class App extends ReactComponent {
  private canvasRef: React.RefObject<HTMLCanvasElement>;

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  async componentDidMount() {
    const canvasId = this.canvasRef.current.id;
  }

  render() {
    return (
      <div>
        <h1>This is the react page</h1>
        <canvas ref={ this.canvasRef } id="game-canvas" />
      </div>
    );
  }
}