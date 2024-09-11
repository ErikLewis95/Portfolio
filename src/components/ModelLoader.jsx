// ModelLoader.jsx
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const ModelLoader = () => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/scene.gltf",
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  }, [scene]);

  return null;
};

export default ModelLoader;
