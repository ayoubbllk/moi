"use client";

import ContactGrid from "@/components/contact/ContactGrid";
import { Canvas } from "@react-three/fiber";

export default function ContactCanvas({
  mouse,
}: {
  mouse: { current: { x: number; y: number } };
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.4]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ContactGrid mouse={mouse} />
    </Canvas>
  );
}
