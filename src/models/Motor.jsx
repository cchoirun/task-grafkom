import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import nmaxScene from "../assets/3d/honda_pcx.glb";

export function Motor({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(nmaxScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Animation"].play();
    } else {
      actions["Animation"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
