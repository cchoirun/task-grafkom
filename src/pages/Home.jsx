import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Eifel, Motor, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    

  const adjustBiMotorForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -3, 0];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustEifelForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -13, -30.4];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0,-13,-60.4];
    }

    return [screenScale, screenPosition];
  };

  const [biMotorScale, biMotorPosition] = adjustBiMotorForScreenSize();
  const [EifelScale, EifelPosition] = adjustEifelForScreenSize();

  return (
    <section className='relative w-full h-screen'>
      <div className='absolute left-0 right-0 z-10 flex items-center justify-center top-28'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 5, 10]} intensity={1} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          
          <Sky isRotating={isRotating} />
          <Eifel
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={EifelPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={EifelScale}
          />
          <Motor
            isRotating={isRotating}
            position={biMotorPosition}
            rotation={[0, 0, 0]}
            scale={biMotorScale}
          />
        </Suspense>
      </Canvas>

    </section>
  );
};

export default Home;
