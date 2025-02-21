"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

function RotatingPizzaSlice() {
  const gltf = useLoader(GLTFLoader, "/pizza-slice.glb");
  const meshRef = useRef<THREE.Group>();

  useFrame(() => {
    if (meshRef.current) {
      // Rotate around both x and y axes
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  // Center and scale the model
  React.useEffect(() => {
    if (gltf) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1 / maxDim;

      gltf.scene.position.sub(center);
      gltf.scene.scale.multiplyScalar(scale);
    }
  }, [gltf]);

  return <primitive object={gltf.scene} ref={meshRef} />;
}

export function PizzaSlice() {
  return (
    <div className="w-16 h-16">
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        <RotatingPizzaSlice />
      </Canvas>
    </div>
  );
}
