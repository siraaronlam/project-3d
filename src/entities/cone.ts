import { ConeGeometry, MeshBasicMaterial } from 'three';
import { BaseEntity } from './base-entity';

export class Cone extends BaseEntity {
  constructor(
    geometry: ConeGeometry = new ConeGeometry(),
    material: MeshBasicMaterial = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true }),
  ) {
    super(geometry, material);
  }

  public update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}