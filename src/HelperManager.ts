import { FolderApi } from 'tweakpane';
import { BoxHelper, Camera, CameraHelper, DirectionalLight, DirectionalLightHelper, Object3D, Scene } from 'three';

export type SceneHelper = Object3D & {
  update(): void;
  dispose(): void;
};

type HelperDescriptor = { label: string; createFn: () => SceneHelper };

export class HelperManager {
  private helpers: Map<string, SceneHelper> = new Map();

  constructor(private scene: Scene) {}

  addHelperToggles(folder: FolderApi, obj: Object3D): void {
    this.helperDescriptors(obj).forEach(({ label, createFn }) => {
      this.addHelperToggle(folder, label, obj, createFn);
    });
  }

  update(): void {
    this.helpers.forEach((helper) => helper.update());
  }

  dispose(): void {
    this.helpers.forEach((helper) => {
      this.scene.remove(helper);
      helper.dispose();
    });
    this.helpers.clear();
  }

  private helperDescriptors(obj: Object3D): HelperDescriptor[] {
    switch (obj.type) {
      case 'DirectionalLight': {
        const light = obj as DirectionalLight;
        const descriptors: HelperDescriptor[] = [
          { label: 'Light Helper', createFn: () => new DirectionalLightHelper(light, 1) },
        ];
        if (light.castShadow) {
          descriptors.push({ label: 'Shadow Camera', createFn: () => new CameraHelper(light.shadow.camera) });
        }
        return descriptors;
      }
      case 'OrthographicCamera':
      case 'PerspectiveCamera':
        return [{ label: 'Camera', createFn: () => new CameraHelper(obj as Camera) }];
      default:
        return [{ label: 'Box', createFn: () => new BoxHelper(obj) }];
    }
  }

  private helperKey(obj: Object3D, label: string): string {
    return `${obj.uuid}-${label}`;
  }

  private enable(obj: Object3D, label: string, createFn: () => SceneHelper): void {
    const hKey = this.helperKey(obj, label);
    const helper = createFn();
    this.scene.add(helper);
    this.helpers.set(hKey, helper);
  }

  private disable(obj: Object3D, label: string): void {
    const hKey = this.helperKey(obj, label);
    const helper = this.helpers.get(hKey);
    if (helper) {
      this.scene.remove(helper);
      helper.dispose();
      this.helpers.delete(hKey);
    }
  }

  private addHelperToggle(folder: FolderApi, label: string, obj: Object3D, createFn: () => SceneHelper): void {
    const hKey = this.helperKey(obj, label);
    const state = { show: this.helpers.has(hKey) };
    const binding = folder.addBinding(state, 'show', { label });
    binding.on('change', (ev) => {
      if (ev.value) {
        this.enable(obj, label, createFn);
      } else {
        this.disable(obj, label);
      }
    });
  }
}
