import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-scene',
  standalone: true,
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container3D') private containerRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private model?: THREE.Object3D;
  private resizeListener!: () => void;

  constructor(private appRef: ApplicationRef) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.initThreeJS();
      this.animate();

      this.resizeListener = () => this.updateThing();
      window.addEventListener('resize', this.resizeListener);

      // Wait for application to be stable before proceeding
      this.appRef.isStable.pipe(
        filter(isStable => isStable),
        first()
      ).subscribe(() => {
        console.log('Application is stable');
        // Additional logic after application stabilization
      });
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private initThreeJS() {
    // Scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.set(0, 3, 4);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.shadowMap.enabled = true;
    const container = this.containerRef.nativeElement;
    container.appendChild(this.renderer.domElement);
    this.renderer.setSize(650, 300);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // GLTF Model Loader
    const loader = new GLTFLoader();
    loader.load(
      'assets/models/tibo/thibault.gltf',  // Path to the model
      (gltf) => {
        this.model = gltf.scene;
        this.model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this.scene.add(this.model);
        console.log('Model loaded successfully:', gltf);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Lights
    this.addLights();

    // Resize
    this.updateThing();
  }

  private addLights() {
    const directionalLight1 = new THREE.DirectionalLight(0xFFFC9C, 1.1);
    directionalLight1.position.set(-2.6864, 3.78423, 0.368122);
    directionalLight1.rotation.set(-33.8579, 29.4209, -13.2805);
    directionalLight1.shadow.bias = -0.0001;
    directionalLight1.castShadow = true;
    this.scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x96DAFF, 0.75);
    directionalLight2.position.set(2.63812, 1.87359, -1.21944);
    directionalLight2.rotation.set(58.6477, 62.204, 25.8848);
    directionalLight2.shadow.bias = -0.0001;
    directionalLight2.castShadow = true;
    this.scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0x96DAFF, 0.4);
    directionalLight3.position.set(-1.19362, 1.87359, -3.03794);
    directionalLight3.rotation.set(58.6477, -40.5046, 25.8848);
    directionalLight3.shadow.bias = -0.0001;
    directionalLight3.castShadow = true;
    this.scene.add(directionalLight3);
  }

  private updateThing = () => {
    if (typeof window !== 'undefined') {
      const thresholdWidth = 768; // in px

      if (window.innerWidth < thresholdWidth) {
        this.camera.position.set(0, 3, 4);
        this.renderer.setSize(250, 250);
      } else {
        this.camera.position.set(0, 3, 4);
        this.renderer.setSize(550, 300);
      }
    }
  };

  private animate = () => {
    requestAnimationFrame(this.animate);

    // Rotate the model (if loaded)
    if (this.model) {
      this.model.rotation.y += 0.002;
    }

    this.controls.update(); // Update controls
    this.renderer.render(this.scene, this.camera);
  }
}
