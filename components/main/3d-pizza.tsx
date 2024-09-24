"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const Pizza = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    if (mountRef.current) {
      renderer.setSize(400, 400);
      // @ts-ignore
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create pizza geometry
    const pizzaGeometry = new THREE.CylinderGeometry(4, 4, 0.5, 32);

    // Create materials
    const crustMaterial = new THREE.MeshPhongMaterial({ color: 0xd4a017 });
    const cheeseMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });

    // Create pizza mesh
    const pizza = new THREE.Mesh(pizzaGeometry, [
      crustMaterial,
      cheeseMaterial,
    ]);
    pizza.rotation.x = Math.PI / 4; // Rotate the pizza on the X axis

    // Add pepperoni
    const pepperoniGeometry = new THREE.CircleGeometry(0.5, 32);
    const pepperoniMaterial = new THREE.MeshPhongMaterial({ color: 0x8b0000 });

    const addPepperoni = (x: number, y: number) => {
      const pepperoni = new THREE.Mesh(pepperoniGeometry, pepperoniMaterial);
      pepperoni.position.set(x, y, 0.3);
      pepperoni.rotation.x = Math.PI / 2;

      // Add slight random rotation for more natural look
      pepperoni.rotation.z = Math.random() * Math.PI;

      // Add slight random scale variation
      const scale = 0.9 + Math.random() * 0.2;
      pepperoni.scale.set(scale, scale, 1);

      pizza.add(pepperoni);
    };

    // Add pepperonis with random placement
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3 + 0.5;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      addPepperoni(x, y);
    }

    scene.add(pizza);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      pizza.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      if (mountRef.current) {
        // @ts-ignore
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Card className="w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
      <CardHeader className="bg-[#000080] text-white p-1 flex flex-row items-center justify-between border-b-2 border-black">
        <CardTitle className="text-sm font-bold">Windows 98 Theme</CardTitle>
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="icon"
            className="w-5 h-5 bg-[#c0c0c0] border-2 border-black text-black font-bold"
          >
            _
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-5 h-5 bg-[#c0c0c0] border-2 border-black text-black font-bold"
          >
            □
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-5 h-5 bg-[#c0c0c0] border-2 border-black text-black font-bold"
          >
            X
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div ref={mountRef} />
      </CardContent>
    </Card>
  );
};
