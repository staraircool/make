"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function SmokeClouds() {
  const ref = useRef(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <group ref={ref}>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#ff007f" opacity={0.3} position={[0, -2, -5]} />
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#ffb3d9" opacity={0.2} position={[0, 2, -10]} />
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#ffffff" opacity={0.4} position={[0, 0, -15]} />
      </Clouds>
    </group>
  );
}

export default function SmokeEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <SmokeClouds />
      </Canvas>
    </div>
  );
}
