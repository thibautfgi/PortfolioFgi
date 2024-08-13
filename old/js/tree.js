import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.y = 3;
camera.position.x = 0;
camera.position.z = 4;

// camera.rotation.x = 24.5;
// camera.rotation.y = 0;
// camera.rotation.z = 0;


// Renderer
const renderer = new THREE.WebGLRenderer({
  alpha: true, // transparence
  antialias: true
});
renderer.shadowMap.enabled = true;
const container = document.getElementById("container3D").appendChild(renderer.domElement);
renderer.setSize(650, 300);

// Controls
const controls = new OrbitControls(camera, renderer.domElement); // active le deplacement ds three js

// GLTF MODEL LOADER
const loader = new GLTFLoader();
let model;

loader.load(
  '/old/tools/models/tibo/thibault.gltf',
  (gltf) => {
    model = gltf.scene;
    // Enable shadows for each mesh in the model
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene.add(model);
    console.log('Model loaded successfully:', gltf); //gestion d'erreur succes
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error); //gestion erreur echec
  }
);

// LIGHT
const directionalLight = new THREE.DirectionalLight(0xFFFC9C, 1.1); // (couleur, intensite lumiere)
directionalLight.position.x = -2.6864;
directionalLight.position.z = 0.368122 ;

directionalLight.position.y = 3.78423;

directionalLight.rotation.x = -33.8579;

directionalLight.rotation.z = -13.2805;

directionalLight.rotation.y = 29.4209;

directionalLight.shadow.bias = -0.0001;

// Set up shadow properties for the lights
directionalLight.castShadow = true;




const directionalLight2 = new THREE.DirectionalLight(0x96DAFF, 0.75); // (couleur, intensite lumiere)
directionalLight2.position.x = 2.63812;
directionalLight2.position.z = -1.21944 ;

directionalLight2.position.y = 1.87359;

directionalLight2.rotation.x = 58.6477;

directionalLight2.rotation.z = 25.8848;

directionalLight2.rotation.y = 62.204;

directionalLight2.shadow.bias = -0.0001;

// Set up shadow properties for the lights
directionalLight.castShadow = true;




const directionalLight3 = new THREE.DirectionalLight(0x96DAFF, 0.4); // (couleur, intensite lumiere)
directionalLight3.position.x = -1.19362;
directionalLight3.position.z = -3.03794;
directionalLight3.position.y = 1.87359;

directionalLight3.rotation.x = 58.6477;

directionalLight3.rotation.z = 25.8848;

directionalLight3.rotation.y = -40.5046;


directionalLight3.shadow.bias = -0.0001;

// Set up shadow properties for the lights
directionalLight3.castShadow = true;


scene.add(directionalLight);
scene.add(directionalLight2);
scene.add(directionalLight3);

// scene.add(new THREE.AmbientLight(0x404040, 2));


// Resize
function updateThing() {
  const thresholdWidth = 768; // in px

  if (window.innerWidth < thresholdWidth) {
    camera.position.y = 3;
camera.position.x = 0;
camera.position.z = 4;
    renderer.setSize(250, 250); // en % maybe?
  } else {
    camera.position.y = 3;
camera.position.x = 0;
camera.position.z = 4;
    renderer.setSize(550, 300);
  }
};

// Call the function on page load
updateThing();

// Add the event listener for window resize
window.addEventListener("resize", updateThing)


// Animation
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the model (if loaded)
  if (model) {
    model.rotation.y += 0.002;
  }

  renderer.render(scene, camera);
};

animate();
