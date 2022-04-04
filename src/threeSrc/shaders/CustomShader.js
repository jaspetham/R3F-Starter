import * as THREE from "three"
import { extend } from "@react-three/fiber"
import glsl from 'glslify';
import { shaderMaterial } from "@react-three/drei";

const CustomShaderMaterial = shaderMaterial(
  // uniforms
  {
    uTime : 0,
    uColor: new THREE.Color(0.0,0.0,0.0),
    uTexture: new THREE.Texture(),
    side:THREE.DoubleSide
  },
  glsl`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec2 pixels;
        float PI=3.141592653589793238;
        void main(){
            vUv=uv;
            vec3 pos = position;
            gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
        }
    `,
    glsl`
        uniform float uTime;
        uniform vec3 uColor;
        uniform float progress;
        uniform sampler2D uTexture;
        uniform vec4 resolution;
        varying vec2 vUv;
        varying vec3 vPosition;
        float PI=3.141592653589793238;
        void main(){
            // vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            vec3 color = uColor;
            gl_FragColor=vec4(vUv,0.,1.);
            // gl_FragColor=vec4(color,1.);
        }
    `
);

extend({CustomShaderMaterial});
