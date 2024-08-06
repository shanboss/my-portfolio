import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
extend({ OrbitControls });

const Model = ({ modelPath }) => {
  const modelRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    new GLTFLoader().load(modelPath, (gltf) => {
      gltf.scene.traverse(function (object) {
        if (object.isMesh) {
          object.castShadow = true; // Enable shadows for any mesh in the model
          object.receiveShadow = true;
        }
      });
      modelRef.current = gltf.scene;
      setLoaded(true);
    });
  }, [modelPath]);

  // Rotate the model
  useFrame(() => {
    if (loaded && modelRef.current) {
      modelRef.current.rotation.y += 0.008;
    }
  });

  return loaded ? (
    <primitive object={modelRef.current} castShadow receiveShadow />
  ) : null;
};

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useFrame(() => controls.current && controls.current.update());

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Loader = () => (
  <mesh visible={true} position={[0, 0, 0]}>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color="hotpink" transparent opacity={0.6} />
  </mesh>
);

const My3DModelViewer = ({ modelPath }) => (
  <Canvas
    className="bg-neutral-800 h-screen border rounded-lg border-gray-800" // Apply Tailwind CSS classes
    shadows // Enable shadow map in the renderer
    camera={{ position: [-50, 0, 30], fov: 5 }} // Example camera setup
  >
    <ambientLight intensity={10} />
    <spotLight
      position={[0, 0, 0]}
      angle={0.1}
      penumbra={0.2}
      color="##8cbed6"
      intensity={100}
      castShadow // Enable shadows for this light
      shadow-mapSize-width={1024} // Adjust shadow map size for better shadow quality
      shadow-mapSize-height={1024}
      shadow-bias={-0.0001} // Adjust shadow bias to avoid shadow acne
    />
    <pointLight position={[-10, -10, -10]} color="#aed5fc" />
    <Suspense fallback={<Loader />}>
      <Model modelPath={modelPath} />
    </Suspense>
    <CameraControls />
  </Canvas>
);

export default My3DModelViewer;
