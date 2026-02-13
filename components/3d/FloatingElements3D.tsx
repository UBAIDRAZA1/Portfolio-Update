'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Box, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingElements3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          
          {/* Floating sphere */}
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[0.5, 32, 32]} position={[-2, 2, 0]}>
              <MeshDistortMaterial
                color="#ff44aa"
                attach="material"
                distort={0.3}
                speed={2}
                roughness={0.1}
              />
            </Sphere>
          </Float>
          
          {/* Floating torus */}
          <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
            <Torus args={[0.8, 0.3, 16, 100]} position={[2, -1, 0]}>
              <MeshDistortMaterial
                color="#4169e1"
                attach="material"
                distort={0.2}
                speed={1.5}
                roughness={0.2}
              />
            </Torus>
          </Float>
          
          {/* Floating cube */}
          <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
            <Box args={[0.8, 0.8, 0.8]} position={[0, -2, 0]}>
              <MeshDistortMaterial
                color="#00ffff"
                attach="material"
                distort={0.4}
                speed={3}
                roughness={0.1}
              />
            </Box>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingElements3D;