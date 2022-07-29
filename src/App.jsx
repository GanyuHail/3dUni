import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas = document.getElementById('myThreeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xFFC0CB, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

<<<<<<< HEAD
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(12, 64, 32),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          sphereTexture: {
            value: new THREE.TextureLoader().load('https://raw.githubusercontent.com/GanyuHail/3dUni/main/src/assets/uniEq.jpg')
          }
        }
      })
    )

    scene.add(sphere);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(12, 64, 32),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    )

    atmosphere.scale.set(1.1, 1.1, 1.1)
    scene.add(atmosphere);
=======
    const sphereGeometry = new THREE.SphereGeometry(12, 64, 32);
    const sphereTexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/GanyuHail/3dUni/af0410ab94f43f47c605838cd9db4d380639afb7/src/assets/uni.jpg' );
    const sphereMaterial = new THREE.MeshBasicMaterial( { map: sphereTexture } );
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);
>>>>>>> parent of 9c31ae7 (change to equirectangular image on sphere)

    const controls = new OrbitControls(camera, renderer.domElement);

    function onPointerMove(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }
    const animate = () => {
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
