import { BackSide, ClampToEdgeWrapping, DoubleSide, FrontSide, LinearSRGBColorSpace, MirroredRepeatWrapping, NoColorSpace, RepeatWrapping, SRGBColorSpace } from 'three';

export type Category = 'Object' | 'Transform' | 'Material' | 'Texture' | 'Shadow';
export type CategorizedProperties = Partial<Record<Category, PropertyInfo[]>>;
export type PropertyInfo = {
  path: string;
  type: 'number' | 'string' | 'boolean' | 'point' | 'readonly' | 'color' | 'list' | 'image';
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: number [] | string[] | { text: string; value: any }[];
  needsUpdate?: boolean;
}

export const CATEGORIES: CategorizedProperties = {
  Object: [
    // { path: 'name', type: 'readonly' },
    
    // lights stuff
    { path: 'color', type: 'color' },
    { path: 'intensity', type: 'number', min: 0, max: 10 },
    
    { path: 'visible', type: 'boolean' },
    { path: 'castShadow', type: 'boolean' },
    { path: 'receiveShadow', type: 'boolean' },
  ],

  Transform: [
    { path: 'position', type: 'point' },
    { path: 'rotation', type: 'point' },
    { path: 'scale', type: 'point' },
  ],

  Material: [
    { path: 'material.color', type: 'color' },
    { path: 'material.emissive', type: 'color' },
    { path: 'material.specular', type: 'color' },
    { path: 'material.transparent', type: 'boolean', needsUpdate: true },
    { path: 'material.opacity', type: 'number', min: 0, max: 1 },
    { path: 'material.wireframe', type: 'boolean' },
    { path: 'material.side', type: 'list', options: [
      { text: 'FrontSide', value: FrontSide },
      { text: 'BackSide', value: BackSide },
      { text: 'DoubleSide', value: DoubleSide }
    ]}
  ],

  Texture: [
    { path: 'material.map.flipY', type: 'boolean', needsUpdate: true  },
    { path: 'material.map.offset', type: 'point' },
    { path: 'material.map.repeat', type: 'point' },
    { path: 'material.map.wrapS', type: 'list', label: 'wrap',
      options: [
        { text: 'RepeatWrapping', value: RepeatWrapping },
        { text: 'ClampToEdgeWrapping', value: ClampToEdgeWrapping }, 
        { text: 'MirroredRepeatWrapping', value: MirroredRepeatWrapping }
      ],
    },
    { path: 'material.map.colorSpace', type: 'list', label: 'color space', options: [
      { text: 'NoColorSpace', value: NoColorSpace },
      { text: 'SRGBColorSpace', value: SRGBColorSpace },
      { text: 'LinearSRGBColorSpace', value: LinearSRGBColorSpace },
    ], needsUpdate: true },
    { path: 'material.map', type: 'image' }
    // { path: 'material.map.colorSpace'}
  ]
};
