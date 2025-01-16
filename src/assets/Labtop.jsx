import {
  Environment,
  PresentationControls,
  useGLTF,
  Html,
} from "@react-three/drei";

export default function Laptop() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <PresentationControls global>
        <primitive object={laptop.scene} position-y={-1.2}>
          <Html
            wrapperClass="laptop"
            position={[-0.03, 1.1, -1.4]}
            transform
            distanceFactor={4.0}
            rotation-x={-0.25}
          >
            <video width={280} height={190} controls muted playsInline autoPlay>
              <source src="/videos/Sample.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
}
