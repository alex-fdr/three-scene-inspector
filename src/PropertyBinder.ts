import { FolderApi } from 'tweakpane';
import { PropertyInfo } from './properties';
import { Object3D } from 'three';
import { BindingApi } from '@tweakpane/core';

export class PropertyBinder {
  constructor(private onChange: (obj: Object3D, key: string) => void) {}

  bind(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    if (!this.propertyExists(obj, property.path)) return;

    switch (property.type) {
      case 'number':
        this.bindNumber(folder, obj, property);
        break;
      case 'string':
        this.bindString(folder, obj, property);
        break;
      case 'boolean':
        this.bindBoolean(folder, obj, property);
        break;
      case 'point':
        this.bindPoint(folder, obj, property);
        break;
      case 'color':
        this.bindColor(folder, obj, property);
        break;
      case 'list':
        this.bindList(folder, obj, property);
        break;
      case 'readonly':
        this.bindReadonly(folder, obj, property);
        break;
      case 'image':
        this.bingImage(folder, obj, property);
        break;
      default:
        this.bindString(folder, obj, property);
        break;
    }
  }

  private bindNumber(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    const options = this.buildBaseOptions(property);

    if (property.min !== undefined && property.max !== undefined) {
      options.min = property.min;
      options.max = property.max;
      options.step = property.step !== undefined ? property.step : undefined;
    }

    this.addBindingWithCallback(folder, target, key, options, obj, property.needsUpdate);
  }

  private bindString(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    const options = this.buildBaseOptions(property);
    this.addBindingWithCallback(folder, target, key, options, obj, property.needsUpdate);
  }

  private bindBoolean(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    const options = this.buildBaseOptions(property);
    this.addBindingWithCallback(folder, target, key, options, obj, property.needsUpdate);
  }

  private bindPoint(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);

    const min = property.min !== undefined ? property.min : -2000;
    const max = property.max !== undefined ? property.max : 2000;
    const step = property.step !== undefined ? property.step : undefined;

    const options = {
      ...this.buildBaseOptions(property),
      x: { min, max, step },
      y: { min, max, step },
    };

    this.addBindingWithCallback(folder, target, key, options, obj, property.needsUpdate);
  }

  private bindColor(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    
    if (typeof target[key] === 'object') {
      const colorObj = { [key]: `#${target[key].getHexString()}` };
      const options = { ...this.buildBaseOptions(property), view: 'color'/* , picker: 'inline'  */};
      const binding = folder.addBinding(colorObj, key, options)
      binding.on('change', (event) => {
        target[key].set(event.value);
      });
      
      return;
    }

    const options = { ...this.buildBaseOptions(property), view: 'color' };
    this.addBindingWithCallback(folder, target, key, options, obj, property.needsUpdate);
  }

  private bindList(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    const options = this.buildBaseOptions(property);

    if (property.options && property.options.length > 0) {
      // Support both array of objects {text, value} and plain string arrays
      const normalized = typeof property.options[0] === 'string'
        ? (property.options as string[]).map(str => ({ text: str, value: str }))
        : property.options as { text: string; value: any }[];

      options.options = normalized.reduce((acc, opt) => {
        acc[opt.text] = opt.value;
        return acc;
      }, {} as Record<string, any>);
    }

    this.addBindingWithCallback(folder, target, key, options, obj, property.needsUpdate, property.onChange);
  }

  private bindReadonly(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const name = property.path.split('.').pop() || property.path;
    let value = this.getValueFromPath(obj, property.path);

    // Special case: show '(unnamed)' for empty name property
    if (property.path === 'name' && !value) {
      value = '(unnamed)';
    }

    const options = { ...this.buildBaseOptions(property), readonly: true };
    folder.addBinding({ [name]: value }, name, options);
  }

  private bingImage(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    
    if (!target[key]) return;

    folder.addBinding(target, key, {
      label: property.label ?? 'Image',
      view: 'texture',
      height: 80,
    });
  }

  private getTargetAndKey(obj: Object3D, path: string): { target: any; key: string } {
    const parts = path.split('.');
    const target = this.getValueFromPath(obj, path, true);
    const key = parts[parts.length - 1];
    return { target, key };
  }

  private buildBaseOptions(property: PropertyInfo): any {
    return property.label ? { label: property.label } : {};
  }

  private addBindingWithCallback(folder: FolderApi, target: any, key: string, options: any, obj: Object3D, needsUpdate?: boolean, onChangeCallback?: (...args: any[]) => void): BindingApi<unknown> {
    const binding = folder.addBinding(target, key, options);

    binding.on('change', (event) => {
      this.onChange!(obj, key);
      onChangeCallback?.(target, event.value);
      
      if (needsUpdate) {
        target.needsUpdate = true;
      }
    });

    return binding;
  }

  private propertyExists(obj: any, path: string): boolean {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      current = current?.[parts[i]];
      if (current == null) return false;
    }
    return current != null && parts[parts.length - 1] in current;
  }

  private getValueFromPath(obj: any, path: string, excludeLast = false): any {
    const parts = path.split('.');
    const length = excludeLast ? parts.length - 1 : parts.length;
    let current = obj;
    for (let i = 0; i < length; i++) {
      current = current?.[parts[i]];
    }
    return current;
  }
}
