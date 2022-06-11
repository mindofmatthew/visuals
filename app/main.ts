import { Scene, PerspectiveCamera, WebGLRenderer, CircleGeometry } from "three";

import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x0047ab);

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new CircleGeometry(0.1, 3);
const material = new MeshBasicMaterial({ color: 0xffe045 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function update() {
  renderer.render(scene, camera);
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(renderer.domElement);
  update();
});
