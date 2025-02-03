import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Hook to get screen width
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, technologyName }) => {
  const [width] = useWindowSize(); // Get window width
  const isMobile = width < 768; // Determine if it's mobile view

  // Glowing text style
  const glowTextStyle = "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg";

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Mobile view - show image and glowing text */}
      {isMobile ? (
        <div className="flex flex-col items-center">
          <img src={icon} alt={technologyName} className="w-24 h-24 md:w-28 md:h-28" />
          <p className={glowTextStyle}>{technologyName}</p>
        </div>
      ) : (
        // Desktop view - show 3D canvas
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
