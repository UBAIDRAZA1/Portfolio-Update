'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ResumeCube = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }
  });

  // Create textures for each face of the cube
  const textureProps = {
    fontSize: 1.5,
    color: '#00ffff',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  return (
    <group ref={groupRef}>
      {/* Front Face - Personal Info */}
      <Text
        {...textureProps}
        position={[0, 0, 1.01]}
        rotation={[0, 0, 0]}
      >
        Ubaid Raza
      </Text>
      
      {/* Back Face - Skills */}
      <Text
        {...textureProps}
        position={[0, 0, -1.01]}
        rotation={[0, Math.PI, 0]}
      >
        Skills
      </Text>
      
      {/* Top Face - Title */}
      <Text
        {...textureProps}
        position={[0, 1.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        Hafiz · Alim · Dev
      </Text>
      
      {/* Bottom Face - Contact */}
      <Text
        {...textureProps}
        position={[0, -1.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        Contact
      </Text>
      
      {/* Right Face - Projects */}
      <Text
        {...textureProps}
        position={[1.01, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        Projects
      </Text>
      
      {/* Left Face - Education */}
      <Text
        {...textureProps}
        position={[-1.01, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Education
      </Text>
      
      {/* Cube Geometry */}
      <Box args={[2, 2, 2]} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#0a0e17" 
          transparent={true}
          opacity={0.7}
          wireframe={true}
        />
      </Box>
    </group>
  );
};

const InteractiveResume = () => {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto p-8 rounded-2xl glass-effect border border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-center mb-8 text-neon-cyan">
        3D Interactive Resume
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Explore my profile through this interactive 3D representation. 
            Each face of the cube represents a different aspect of my professional journey.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg inline-block">
            <p className="text-electric-blue">
              Click and drag to rotate • Scroll to zoom
            </p>
          </div>
        </div>
        
        <div className="h-80">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <ResumeCube />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              minDistance={3} 
              maxDistance={10} 
            />
          </Canvas>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveResume;