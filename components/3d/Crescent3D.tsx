'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

const Crescent3D = () => {
  // Create a crescent shape using custom geometry
  const CrescentGeometry = () => {
    const outerCircle = new THREE.Shape();
    outerCircle.absarc(0, 0, 1, 0, Math.PI * 2, false);
    
    const innerCircle = new THREE.Path();
    innerCircle.absarc(0.5, 0, 0.7, 0, Math.PI * 2, true);
    
    outerCircle.holes.push(innerCircle);
    
    return (
      <extrudeGeometry 
        args={[
          outerCircle, 
          { 
            depth: 0.2, 
            bevelEnabled: true, 
            bevelThickness: 0.05, 
            bevelSize: 0.05, 
            bevelSegments: 8 
          }
        ]} 
      />
    );
  };

  return (
    <div className="relative w-32 h-32">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ffff" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#ff44aa" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh position={[0, 0, 0]}>
              <CrescentGeometry />
              <MeshDistortMaterial
                color="#4169e1"
                attach="material"
                distort={0.2}
                speed={2}
                roughness={0.1}
                metalness={0.8}
              />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Crescent3D;