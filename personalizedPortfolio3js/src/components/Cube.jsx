import React, { useRef } from 'react';
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
const Cube = () => {
  // const textRef = useRef();
  // useFrame(
  //   (state) =>
  //     (textRef.current = Math.sin(state.clock.elapsedTime) * 2)
  // );

  //Sourced from Github repo

  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1)
  );

  // const colorMap = useLoader(TextureLoader, 'logo.png');

  return (
    <mesh>
      <boxGeometry />
      <meshLambertMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />

          <color attach="background" args={['#116466']} />
          <Text ref={textRef} fontSize={1} color="#ffcb9a">
            HELLO!
          </Text>
        </RenderTexture>
      </meshLambertMaterial>
    </mesh>

    //   <mesh>
    //   <boxGeometry />
    //   <meshStandardMaterial>
    //     <RenderTexture attach="map">
    //       <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    //       <color attach="background" args={["#dc9dcd"]} />
    //       <Text ref={textRef} fontSize={3} color="#555">
    //         hello
    //       </Text>
    //     </RenderTexture>
    //   </meshStandardMaterial>
    // </mesh>
  );
};

export default Cube;
