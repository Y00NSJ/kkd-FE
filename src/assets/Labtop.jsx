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
            position={[-0.03, 1.3, -1.4]}
            transform
            distanceFactor={4.0}
            rotation-x={-0.25}
          >
            <iframe
              width={280}
              height={190}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
}
