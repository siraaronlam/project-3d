import { BaseScene } from '../base-scene';
import { Cube } from '../../entities/cube';

export class ExampleSceneCube extends BaseScene {
  constructor(
    canvasId: HTMLCanvasElement,
    width: number = 1000,
    height: number = 1000,
  ) {
    super(canvasId, width, height);

    this.camera.position.z = 5;
    this.addCube();
  }

  private addCube() {
    const cube = new Cube();
    this.addEntityToScene(cube);
  }

  // TO-DO: potentially override from BaseScene
  public update() {
    this.updateAllEntities();
  }
}