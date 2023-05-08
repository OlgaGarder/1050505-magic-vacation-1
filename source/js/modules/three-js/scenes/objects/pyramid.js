import * as THREE from "three";
import {colors} from "../helpers/colors";
import {reflectivity} from "../helpers/reflectivity";

export default class Pyramid extends THREE.Group {
  constructor(material) {
    super();

    this.color = colors.Blue;
    this.material = material;

    this.constructChildren();
  }

  constructChildren() {
    this.addPyramid();
  }

  addPyramid() {
    const cone = new THREE.ConeBufferGeometry(Math.hypot(250, 250) / 2, 280, 4);
    const mesh = new THREE.Mesh(cone, this.material({color: this.color, flatShading: true, ...reflectivity.soft}));
    this.add(mesh);
  }
}