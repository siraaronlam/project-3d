import { Mesh } from 'three';

export interface IBaseEntity {
  update(): void;
  getMesh(): Mesh;
  disposeEntityResources(): void;
}

// TO-DO: extract some of this to Scene-01 and make this more basic
export abstract class BaseEntity implements IBaseEntity {
  protected mesh: Mesh;

  constructor(private geometry, private material) {
    this.mesh = new Mesh(this.geometry, this.material);
  }

  abstract update(): void

  public getMesh(): Mesh {
    return this.mesh;
  }

  // Clean up the scene to prevent range out of bounds for webgl buffer
  public disposeEntityResources() {
    this.geometry.dispose();
    this.material.dispose();
  }
}