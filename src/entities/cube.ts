import { BoxGeometry, MeshBasicMaterial } from 'three';
import { BaseEntity } from './base-entity';

export class Cube extends BaseEntity {
  constructor(
    geometry: BoxGeometry = new BoxGeometry(),
    material: MeshBasicMaterial = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true }),
  ) {
    super(geometry, material);
  }

  public update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}