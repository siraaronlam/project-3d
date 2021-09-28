import { BaseScene } from '../base-scene';
import { Cone } from '../../entities/cone';

export class ExampleSceneCone extends BaseScene {
  constructor(
    canvasId: HTMLCanvasElement,
    width: number = 1000,
    height: number = 1000,
  ) {
    super(canvasId, width, height);

    this.camera.position.z = 5;
    this.addCone();
  }

  private addCone() {
    const cone = new Cone();
    this.addEntityToScene(cone);
  }

  public update() {
    this.updateAllEntities();
  }
}