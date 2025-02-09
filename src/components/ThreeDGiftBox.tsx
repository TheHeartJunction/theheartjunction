import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const GiftBox = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
};

const ThreeDGiftBox = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <GiftBox />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDGiftBox;

