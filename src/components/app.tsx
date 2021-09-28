import React, { Component as ReactComponent } from 'react';
import { ExampleSceneCube } from '../scenes/example-scenes/example-scene-cube';
import { ExampleSceneCone } from '../scenes/example-scenes/example-scene-cone';

export default class App extends ReactComponent {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private scene: ExampleSceneCube | ExampleSceneCone;

  constructor(props) {
    super(props);
    this.state = {
      showCube: true,
      showCone: false,
    };
    this.canvasRef = React.createRef();
  }

  onShowCube = () => {
    // Clean up the scene to prevent range out of bounds for webgl buffer
    this.scene.disposeAllEntityResources();

    const canvasId = this.canvasRef.current;
    this.scene = new ExampleSceneCube(canvasId, window.innerWidth, window.innerHeight);
    this.scene.animate();
  }

  onShowCone = () => {
    // Clean up the scene to prevent range out of bounds for webgl buffer
    this.scene.disposeAllEntityResources();

    const canvasId = this.canvasRef.current;
    this.scene = new ExampleSceneCone(canvasId, window.innerWidth, window.innerHeight);
    this.scene.animate();
  }

  componentDidMount() {
    const canvasId = this.canvasRef.current;
    this.scene = new ExampleSceneCube(canvasId, window.innerWidth, window.innerHeight);
    this.scene.animate();
  }

  render() {
    return (
      <div>
        <button onClick={ this.onShowCube }>Cube</button>
        <button onClick={ this.onShowCone }>Cone</button>
        <canvas ref={ this.canvasRef } id="game-canvas" />
      </div>
    );
  }
}