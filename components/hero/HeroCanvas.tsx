"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Mouse = { current: { x: number; y: number } };

function DeformGrid({ mouse }: { mouse: Mouse }) {
  const mat = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color("#F4601A") },
    }),
    [],
  );

  useFrame((state) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    mat.current.uniforms.uMouse.value.lerp(
      new THREE.Vector2(mouse.current.x, mouse.current.y),
      0.08,
    );
    state.camera.position.x += (mouse.current.x * 0.6 - state.camera.position.x) * 0.04;
    state.camera.position.y += (mouse.current.y * 0.35 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh rotation={[-0.55, 0.15, 0]} position={[0.4, -0.2, 0]}>
      <planeGeometry args={[16, 10, 72, 46]} />
      <shaderMaterial
        ref={mat}
        transparent
        wireframe
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying float vLift;
          void main() {
            vec3 p = position;
            float d = length(uv - (uMouse * 0.5 + 0.5));
            float wave = sin(p.x * 0.85 + uTime * 0.7) * 0.22;
            wave += cos(p.y * 0.7 + uTime * 0.55) * 0.16;
            float bump = exp(-d * 5.2) * 1.15;
            p.z += wave + bump;
            vLift = bump + wave * 0.4;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;
          varying float vLift;
          void main() {
            float a = 0.18 + smoothstep(0.0, 1.2, vLift) * 0.55;
            gl_FragColor = vec4(uColor, a);
          }
        `}
      />
    </mesh>
  );
}

function Dust({ mouse }: { mouse: Mouse }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 180;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03 + mouse.current.x * 0.08;
    ref.current.rotation.x = mouse.current.y * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#FAFAFA" size={0.025} transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

/** Three.js hero — lazy-loaded only on desktop + WebGL. Mouse drives camera + vertex lift. */
export default function HeroCanvas({ mouse }: { mouse: Mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 6.2], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.35}>
        <DeformGrid mouse={mouse} />
      </Float>
      <Dust mouse={mouse} />
    </Canvas>
  );
}
