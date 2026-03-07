# Three.js Scene Inspector

A debugging tool for Three.js that displays the scene hierarchy and editable object properties using Tweakpane.

![Screenshot](docs/screenshot.png)

## Requirements

- three.js `^0.183.2`
- tweakpane `^4.0.0`

## Installation

```bash
npm install @alexfdr/three-scene-inspector
```

## Usage

```typescript
import { Scene } from 'three';
import { ThreeSceneInspector } from '@alexfdr/three-scene-inspector';

const scene = new Scene();
// ...
const inspector = new ThreeSceneInspector(scene);
```

Properties are organized into categories. Add or modify categories by editing `src/properties.ts`.

## API

| Method | Description |
|---|---|
| `refresh()` | Rebuild hierarchy after scene changes |
| `selectObject(obj: Container)` | Programmatically select an object |
| `dispose()` | Remove all panels and listeners |

## Development

```bash
npm install
npm run dev    # Start dev server at http://localhost:5173/
npm run build  # Build library
```

## License

ISC
