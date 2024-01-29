//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";




	//Scene
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.y = 0,
	camera.position.x = 0,
	camera.position.z = 3;


	//renderer
	const renderer = new THREE.WebGLRenderer({
		// alpha: true,
		antialias: true
	});
  renderer.shadowMap.enabled = true;
  const container =	document.getElementById("container3D").appendChild(renderer.domElement); 
  renderer.setSize( 450 , 300 );
  
  // renderer.setSize(container.clientWidth,container.clientHeight);
  // container.appendChild(renderer.domElement);

	
	// GLTF MODEL LOADER

    const loader = new GLTFLoader();
    let model;

    loader.load(
    '/tools/models/shiba/scene.gltf',
        (gltf) => {
          model = gltf.scene;
          scene.add(model);
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );


	//LIGHT
	const light = new THREE.DirectionalLight(0xFFFFFF, 1 )// (couleur, intensite lumiere)
	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	// light. = 2
	light.position.y = 10
	light.position.x = 0
	light.position.z = 10 // positione la source de la lumière

	directionalLight.position.set(5, 5, 5);
		
	//Set up shadow properties for the light

	light.castShadow = true // envoie des ombres

	scene.add(light)
	scene.add(directionalLight);

	scene.add(new THREE.AmbientLight(0x404040, 0.4))


    
//resize

  window.addEventListener("resize", () => {
    const thresholdWidth = 1000; // in px
  
    if (window.innerWidth < thresholdWidth) {
  
      renderer.setSize(250, 200);
    } else {
  
      renderer.setSize(450, 300);
    }
  });

    // Animation 


    const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the model (if loaded)
    if (model) {
        model.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
    };

    animate();