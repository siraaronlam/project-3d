import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { BaseEntity } from '../entities/base-entity';

export interface IBaseScene {
  addEntityToScene(entity: BaseEntity): void;
  updateAllEntities(): void;
  update(): void;
  animate(): void;
  disposeAllEntityResources(): void;
}

export abstract class BaseScene implements IBaseScene{

  protected entities: BaseEntity[] = [];
  protected camera: PerspectiveCamera;
  protected renderer: WebGLRenderer;
  protected scene: Scene;

  constructor(
    protected canvasId: HTMLCanvasElement,
    protected windowWidth: number,
    protected windowHeight: number,
  ) {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, this.windowWidth / this.windowHeight, 0.1, 1000),
    this.renderer = new WebGLRenderer({ canvas: this.canvasId });
    this.renderer.setSize(this.windowWidth, this.windowHeight);
  }

  public addEntityToScene(entity: BaseEntity) {
    this.entities.push(entity);
    this.scene.add(entity.getMesh());
  }

  public updateAllEntities(): void {
    this.entities.forEach((entity) => entity.update());
  }

  // TO-DO:
  // - potentially have wrapping classes override this method
  // - implement this method to call updateAllEntities() so wrapping classes do not have to
  public abstract update(): void

  public animate() {
    requestAnimationFrame(() => this.animate());

    this.update();

    this.renderer.render(this.scene, this.camera);
  }

  // Clean up the scene to prevent range out of bounds for webgl buffer
  public disposeAllEntityResources() {
    this.entities.forEach((entity) => this.scene.remove(entity.getMesh()));
    this.entities.forEach((entity) => entity.disposeEntityResources());
    this.renderer.renderLists.dispose();
  }
}