"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ContactGrid({ mouse }: { mouse: { current: { x: number; y: number } } }) {
  const points = useRef<THREE.Points>(null);
  const { positions, count } = useMemo(() => {
    const cols = 28;
    const rows = 16;
    const arr = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        arr[i++] = (x / (cols - 1) - 0.5) * 14;
        arr[i++] = (y / (rows - 1) - 0.5) * 8;
        arr[i++] = 0;
      }
    }
    return { positions: arr, count: cols * rows };
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const dx = x - mouse.current.x * 6;
      const dy = y - mouse.current.y * 3.5;
      const d = Math.hypot(dx, dy);
      pos.setZ(i, Math.sin(d * 1.4 - t * 1.6) * Math.exp(-d * 0.22) * 0.9);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.slice()}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#F4601A" size={0.045} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}
